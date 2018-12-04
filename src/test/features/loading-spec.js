/*
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {LoadingMixin} from '../../features/loading.js';
import ModelViewerElementBase, {$canvas} from '../../model-viewer-base.js';
import {assetPath, pickShadowDescendant, timePasses, waitForEvent} from '../helpers.js';

const expect = chai.expect;
const ASTRONAUT_GLB_PATH = assetPath('Astronaut.glb');

suite('ModelViewerElementBase with LoadingMixin', () => {
  suite('when registered', () => {
    let nextId = 0;
    let tagName;
    let ModelViewerElement;

    setup(() => {
      tagName = `model-viewer-loading-${nextId++}`;
      ModelViewerElement = class extends LoadingMixin
      (ModelViewerElementBase) {
        static get is() {
          return tagName;
        }
      };
      customElements.define(tagName, ModelViewerElement);
    });

    test('can be directly instantiated', () => {
      const element = new ModelViewerElement();
      expect(element).to.be.ok;
    });

    test('can be instantiated with document.createElement', () => {
      const element = document.createElement(tagName);
      expect(element).to.be.ok;
    });
    // TODO: Elements must have loaded to hide poster...

    suite('loading', () => {
      let element;

      setup(async () => {
        element = new ModelViewerElement();
        document.body.appendChild(element);
        element.poster = assetPath('poster.png');

        // Wait at least a microtask for size calculations
        await timePasses();
      });

      teardown(() => {
        if (element.parentNode != null) {
          element.parentNode.removeChild(element);
        }
      });

      test('creates a poster element that captures interactions', () => {
        const picked = pickShadowDescendant(element);
        // TODO(cdata): Leaky internal details here:
        expect(picked.classList.contains('poster')).to.be.equal(true);
      });

      suite('preload', () => {
        test('retains poster after preloading', async () => {
          element.preload = true;
          element.src = ASTRONAUT_GLB_PATH;

          await waitForEvent(element, 'preload');

          const canvas = element[$canvas];
          const picked = pickShadowDescendant(element);

          expect(picked).to.not.be.equal(canvas);
        });


        suite('reveal-when-loaded', () => {
          test('hides poster when element loads', async () => {
            element.preload = true;
            element.revealWhenLoaded = true;
            element.src = ASTRONAUT_GLB_PATH;

            await waitForEvent(element, 'load');

            const canvas = element[$canvas];
            const picked = pickShadowDescendant(element);

            expect(picked).to.be.equal(canvas);
          });
        });
      });

      suite('configuring poster via attribute', () => {
        suite('removing the attribute', () => {
          test('sets poster to null', async () => {
            // NOTE(cdata): This is less important after we resolve
            // https://github.com/PolymerLabs/model-viewer/issues/76
            element.setAttribute('poster', ASTRONAUT_GLB_PATH);
            await timePasses();
            element.removeAttribute('poster');
            await timePasses();
            expect(element.poster).to.be.equal(null);
          });
        });
      });

      suite('with loaded model src', () => {
        setup(() => {
          element.src = ASTRONAUT_GLB_PATH;
        });

        test('can be hidden imperatively', async () => {
          const ostensiblyThePoster = pickShadowDescendant(element);
          element.dismissPoster();
          // Wait for property changes to propagate
          await timePasses();
          const ostensiblyNotThePoster = pickShadowDescendant(element);

          expect(ostensiblyThePoster).to.not.be.equal(ostensiblyNotThePoster);
        });

        suite('when poster is hidden', () => {
          setup(async () => {
            element.dismissPoster();
            // Wait for property changes to propagate
            await timePasses();
          });

          test('allows the canvas to be interactive', async () => {
            const canvas = element[$canvas];
            const picked = pickShadowDescendant(element);

            expect(picked).to.be.equal(canvas);
          });
        });
      });
    });
  });
});
