function _templateObject22_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host ::slotted(*) {\n        padding: var(--paper-radio-group-item-padding, 12px);\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject22_593e7270f77111e88ec25b7f4da4f001=function _templateObject22_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject21_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<style>\n  :host {\n    display: inline-block;\n    line-height: 0;\n    white-space: nowrap;\n    cursor: pointer;\n    @apply --paper-font-common-base;\n    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);\n    /* -1px is a sentinel for the default and is replace in `attached`. */\n    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  #radioContainer {\n    @apply --layout-inline;\n    @apply --layout-center-center;\n    position: relative;\n    width: var(--calculated-paper-radio-button-size);\n    height: var(--calculated-paper-radio-button-size);\n    vertical-align: middle;\n\n    @apply --paper-radio-button-radio-container;\n  }\n\n  #ink {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    right: auto;\n    width: var(--calculated-paper-radio-button-ink-size);\n    height: var(--calculated-paper-radio-button-ink-size);\n    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n\n  #ink[checked] {\n    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));\n  }\n\n  #offRadio, #onRadio {\n    position: absolute;\n    box-sizing: border-box;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n  }\n\n  #offRadio {\n    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    background-color: var(--paper-radio-button-unchecked-background-color, transparent);\n    transition: border-color 0.28s;\n  }\n\n  #onRadio {\n    background-color: var(--paper-radio-button-checked-color, var(--primary-color));\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: -webkit-transform ease 0.28s;\n    transition: transform ease 0.28s;\n    will-change: transform;\n  }\n\n  :host([checked]) #offRadio {\n    border-color: var(--paper-radio-button-checked-color, var(--primary-color));\n  }\n\n  :host([checked]) #onRadio {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  #radioLabel {\n    line-height: normal;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: var(--paper-radio-button-label-spacing, 10px);\n    white-space: normal;\n    color: var(--paper-radio-button-label-color, var(--primary-text-color));\n\n    @apply --paper-radio-button-label;\n  }\n\n  :host([checked]) #radioLabel {\n    @apply --paper-radio-button-label-checked;\n  }\n\n  #radioLabel:dir(rtl) {\n    margin-left: 0;\n    margin-right: var(--paper-radio-button-label-spacing, 10px);\n  }\n\n  #radioLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #offRadio {\n    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled][checked]) #onRadio {\n    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #radioLabel {\n    /* slightly darker than the button, so that it's readable */\n    opacity: 0.65;\n  }\n</style>\n\n<div id=\"radioContainer\">\n  <div id=\"offRadio\"></div>\n  <div id=\"onRadio\"></div>\n</div>\n\n<div id=\"radioLabel\"><slot></slot></div>"],["\n<style>\n  :host {\n    display: inline-block;\n    line-height: 0;\n    white-space: nowrap;\n    cursor: pointer;\n    @apply --paper-font-common-base;\n    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);\n    /* -1px is a sentinel for the default and is replace in \\`attached\\`. */\n    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  #radioContainer {\n    @apply --layout-inline;\n    @apply --layout-center-center;\n    position: relative;\n    width: var(--calculated-paper-radio-button-size);\n    height: var(--calculated-paper-radio-button-size);\n    vertical-align: middle;\n\n    @apply --paper-radio-button-radio-container;\n  }\n\n  #ink {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    right: auto;\n    width: var(--calculated-paper-radio-button-ink-size);\n    height: var(--calculated-paper-radio-button-ink-size);\n    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n\n  #ink[checked] {\n    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));\n  }\n\n  #offRadio, #onRadio {\n    position: absolute;\n    box-sizing: border-box;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n  }\n\n  #offRadio {\n    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    background-color: var(--paper-radio-button-unchecked-background-color, transparent);\n    transition: border-color 0.28s;\n  }\n\n  #onRadio {\n    background-color: var(--paper-radio-button-checked-color, var(--primary-color));\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: -webkit-transform ease 0.28s;\n    transition: transform ease 0.28s;\n    will-change: transform;\n  }\n\n  :host([checked]) #offRadio {\n    border-color: var(--paper-radio-button-checked-color, var(--primary-color));\n  }\n\n  :host([checked]) #onRadio {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  #radioLabel {\n    line-height: normal;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: var(--paper-radio-button-label-spacing, 10px);\n    white-space: normal;\n    color: var(--paper-radio-button-label-color, var(--primary-text-color));\n\n    @apply --paper-radio-button-label;\n  }\n\n  :host([checked]) #radioLabel {\n    @apply --paper-radio-button-label-checked;\n  }\n\n  #radioLabel:dir(rtl) {\n    margin-left: 0;\n    margin-right: var(--paper-radio-button-label-spacing, 10px);\n  }\n\n  #radioLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #offRadio {\n    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled][checked]) #onRadio {\n    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #radioLabel {\n    /* slightly darker than the button, so that it's readable */\n    opacity: 0.65;\n  }\n</style>\n\n<div id=\"radioContainer\">\n  <div id=\"offRadio\"></div>\n  <div id=\"onRadio\"></div>\n</div>\n\n<div id=\"radioLabel\"><slot></slot></div>"]);_templateObject21_593e7270f77111e88ec25b7f4da4f001=function _templateObject21_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject20_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n  <style>\n    :host {\n      @apply --layout;\n      @apply --layout-justified;\n      @apply --layout-center;\n      width: 200px;\n      cursor: default;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));\n      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));\n      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));\n      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));\n      --calculated-paper-slider-height: var(--paper-slider-height, 2px);\n    }\n\n    /* focus shows the ripple */\n    :host(:focus) {\n      outline: none;\n    }\n\n    /**\n      * NOTE(keanulee): Though :host-context is not universally supported, some pages\n      * still rely on paper-slider being flipped when dir=\"rtl\" is set on body. For full\n      * compatibility, dir=\"rtl\" must be explicitly set on paper-slider.\n      */\n    :dir(rtl) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): This is separate from the rule above because :host-context may\n      * not be recognized.\n      */\n    :host([dir=\"rtl\"]) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): Needed to override the :host-context rule (where supported)\n      * to support LTR sliders in RTL pages.\n      */\n    :host([dir=\"ltr\"]) #sliderContainer {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n\n    #sliderContainer {\n      position: relative;\n      width: 100%;\n      height: calc(30px + var(--calculated-paper-slider-height));\n      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);\n      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderContainer:focus {\n      outline: 0;\n    }\n\n    #sliderContainer.editable {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n\n    .bar-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n\n    .ring > .bar-container {\n      left: calc(5px + var(--calculated-paper-slider-height)/2);\n      transition: left 0.18s ease;\n    }\n\n    .ring.expand.dragging > .bar-container {\n      transition: none;\n    }\n\n    .ring.expand:not(.pin) > .bar-container {\n      left: calc(8px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderBar {\n      padding: 15px 0;\n      width: 100%;\n      background-color: var(--paper-slider-bar-color, transparent);\n      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));\n      --paper-progress-height: var(--calculated-paper-slider-height);\n    }\n\n    .slider-markers {\n      position: absolute;\n      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/\n      top: 15px;\n      height: var(--calculated-paper-slider-height);\n      left: 0;\n      right: -1px;\n      box-sizing: border-box;\n      pointer-events: none;\n      @apply --layout-horizontal;\n    }\n\n    .slider-marker {\n      @apply --layout-flex;\n    }\n    .slider-markers::after,\n    .slider-marker::after {\n      content: \"\";\n      display: block;\n      margin-left: -1px;\n      width: 2px;\n      height: var(--calculated-paper-slider-height);\n      border-radius: 50%;\n      background-color: var(--paper-slider-markers-color, #000);\n    }\n\n    .slider-knob {\n      position: absolute;\n      left: 0;\n      top: 0;\n      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);\n      width: calc(30px + var(--calculated-paper-slider-height));\n      height: calc(30px + var(--calculated-paper-slider-height));\n    }\n\n    .transiting > .slider-knob {\n      transition: left 0.08s ease;\n    }\n\n    .slider-knob:focus {\n      outline: none;\n    }\n\n    .slider-knob.dragging {\n      transition: none;\n    }\n\n    .snaps > .slider-knob.dragging {\n      transition: -webkit-transform 0.08s ease;\n      transition: transform 0.08s ease;\n    }\n\n    .slider-knob-inner {\n      margin: 10px;\n      width: calc(100% - 20px);\n      height: calc(100% - 20px);\n      background-color: var(--paper-slider-knob-color, var(--google-blue-700));\n      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));\n      border-radius: 50%;\n\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n\n      transition-property: -webkit-transform, background-color, border;\n      transition-property: transform, background-color, border;\n      transition-duration: 0.18s;\n      transition-timing-function: ease;\n    }\n\n    .expand:not(.pin) > .slider-knob > .slider-knob-inner {\n      -webkit-transform: scale(1.5);\n      transform: scale(1.5);\n    }\n\n    .ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-color, var(--google-blue-700));\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -13px;\n      width: 26px;\n      height: 26px;\n      border-radius: 50% 50% 50% 0;\n\n      -webkit-transform: rotate(-45deg) scale(0) translate(0);\n      transform: rotate(-45deg) scale(0) translate(0);\n    }\n\n    .slider-knob-inner::before,\n    .slider-knob-inner::after {\n      transition: -webkit-transform .18s ease, background-color .18s ease;\n      transition: transform .18s ease, background-color .18s ease;\n    }\n\n    .pin.ring > .slider-knob > .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::before {\n      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);\n      transform: rotate(-45deg) scale(1) translate(17px, -17px);\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::after {\n      content: attr(value);\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -16px;\n      width: 32px;\n      height: 26px;\n      text-align: center;\n      color: var(--paper-slider-font-color, #fff);\n      font-size: 10px;\n\n      -webkit-transform: scale(0) translate(0);\n      transform: scale(0) translate(0);\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::after {\n      -webkit-transform: scale(1) translate(0, -17px);\n      transform: scale(1) translate(0, -17px);\n    }\n\n    /* paper-input */\n    .slider-input {\n      width: 50px;\n      overflow: hidden;\n      --paper-input-container-input: {\n        text-align: center;\n        @apply --paper-slider-input-container-input;\n      };\n      @apply --paper-slider-input;\n    }\n\n    /* disabled state */\n    #sliderContainer.disabled {\n      pointer-events: none;\n    }\n\n    .disabled > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      -webkit-transform: scale3d(0.75, 0.75, 1);\n      transform: scale3d(0.75, 0.75, 1);\n    }\n\n    .disabled.ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    paper-ripple {\n      color: var(--paper-slider-knob-color, var(--google-blue-700));\n    }\n  </style>\n\n  <div id=\"sliderContainer\" class$=\"[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]\">\n    <div class=\"bar-container\">\n      <paper-progress disabled$=\"[[disabled]]\" id=\"sliderBar\" aria-hidden=\"true\" min=\"[[min]]\" max=\"[[max]]\" step=\"[[step]]\" value=\"[[immediateValue]]\" secondary-progress=\"[[secondaryProgress]]\" on-down=\"_bardown\" on-up=\"_resetKnob\" on-track=\"_bartrack\" on-tap=\"_barclick\">\n      </paper-progress>\n    </div>\n\n    <template is=\"dom-if\" if=\"[[snaps]]\">\n      <div class=\"slider-markers\">\n        <template is=\"dom-repeat\" items=\"[[markers]]\">\n          <div class=\"slider-marker\"></div>\n        </template>\n      </div>\n    </template>\n\n    <div id=\"sliderKnob\" class=\"slider-knob\" on-down=\"_knobdown\" on-up=\"_resetKnob\" on-track=\"_onTrack\" on-transitionend=\"_knobTransitionEnd\">\n        <div class=\"slider-knob-inner\" value$=\"[[immediateValue]]\"></div>\n    </div>\n  </div>\n\n  <template is=\"dom-if\" if=\"[[editable]]\">\n    <paper-input id=\"input\" type=\"number\" step=\"[[step]]\" min=\"[[min]]\" max=\"[[max]]\" class=\"slider-input\" disabled$=\"[[disabled]]\" value=\"[[immediateValue]]\" on-change=\"_changeValue\" on-keydown=\"_inputKeyDown\" no-label-float>\n    </paper-input>\n  </template>\n"],["\n  <style>\n    :host {\n      @apply --layout;\n      @apply --layout-justified;\n      @apply --layout-center;\n      width: 200px;\n      cursor: default;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));\n      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));\n      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));\n      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));\n      --calculated-paper-slider-height: var(--paper-slider-height, 2px);\n    }\n\n    /* focus shows the ripple */\n    :host(:focus) {\n      outline: none;\n    }\n\n    /**\n      * NOTE(keanulee): Though :host-context is not universally supported, some pages\n      * still rely on paper-slider being flipped when dir=\"rtl\" is set on body. For full\n      * compatibility, dir=\"rtl\" must be explicitly set on paper-slider.\n      */\n    :dir(rtl) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): This is separate from the rule above because :host-context may\n      * not be recognized.\n      */\n    :host([dir=\"rtl\"]) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): Needed to override the :host-context rule (where supported)\n      * to support LTR sliders in RTL pages.\n      */\n    :host([dir=\"ltr\"]) #sliderContainer {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n\n    #sliderContainer {\n      position: relative;\n      width: 100%;\n      height: calc(30px + var(--calculated-paper-slider-height));\n      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);\n      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderContainer:focus {\n      outline: 0;\n    }\n\n    #sliderContainer.editable {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n\n    .bar-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n\n    .ring > .bar-container {\n      left: calc(5px + var(--calculated-paper-slider-height)/2);\n      transition: left 0.18s ease;\n    }\n\n    .ring.expand.dragging > .bar-container {\n      transition: none;\n    }\n\n    .ring.expand:not(.pin) > .bar-container {\n      left: calc(8px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderBar {\n      padding: 15px 0;\n      width: 100%;\n      background-color: var(--paper-slider-bar-color, transparent);\n      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));\n      --paper-progress-height: var(--calculated-paper-slider-height);\n    }\n\n    .slider-markers {\n      position: absolute;\n      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/\n      top: 15px;\n      height: var(--calculated-paper-slider-height);\n      left: 0;\n      right: -1px;\n      box-sizing: border-box;\n      pointer-events: none;\n      @apply --layout-horizontal;\n    }\n\n    .slider-marker {\n      @apply --layout-flex;\n    }\n    .slider-markers::after,\n    .slider-marker::after {\n      content: \"\";\n      display: block;\n      margin-left: -1px;\n      width: 2px;\n      height: var(--calculated-paper-slider-height);\n      border-radius: 50%;\n      background-color: var(--paper-slider-markers-color, #000);\n    }\n\n    .slider-knob {\n      position: absolute;\n      left: 0;\n      top: 0;\n      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);\n      width: calc(30px + var(--calculated-paper-slider-height));\n      height: calc(30px + var(--calculated-paper-slider-height));\n    }\n\n    .transiting > .slider-knob {\n      transition: left 0.08s ease;\n    }\n\n    .slider-knob:focus {\n      outline: none;\n    }\n\n    .slider-knob.dragging {\n      transition: none;\n    }\n\n    .snaps > .slider-knob.dragging {\n      transition: -webkit-transform 0.08s ease;\n      transition: transform 0.08s ease;\n    }\n\n    .slider-knob-inner {\n      margin: 10px;\n      width: calc(100% - 20px);\n      height: calc(100% - 20px);\n      background-color: var(--paper-slider-knob-color, var(--google-blue-700));\n      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));\n      border-radius: 50%;\n\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n\n      transition-property: -webkit-transform, background-color, border;\n      transition-property: transform, background-color, border;\n      transition-duration: 0.18s;\n      transition-timing-function: ease;\n    }\n\n    .expand:not(.pin) > .slider-knob > .slider-knob-inner {\n      -webkit-transform: scale(1.5);\n      transform: scale(1.5);\n    }\n\n    .ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-color, var(--google-blue-700));\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -13px;\n      width: 26px;\n      height: 26px;\n      border-radius: 50% 50% 50% 0;\n\n      -webkit-transform: rotate(-45deg) scale(0) translate(0);\n      transform: rotate(-45deg) scale(0) translate(0);\n    }\n\n    .slider-knob-inner::before,\n    .slider-knob-inner::after {\n      transition: -webkit-transform .18s ease, background-color .18s ease;\n      transition: transform .18s ease, background-color .18s ease;\n    }\n\n    .pin.ring > .slider-knob > .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::before {\n      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);\n      transform: rotate(-45deg) scale(1) translate(17px, -17px);\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::after {\n      content: attr(value);\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -16px;\n      width: 32px;\n      height: 26px;\n      text-align: center;\n      color: var(--paper-slider-font-color, #fff);\n      font-size: 10px;\n\n      -webkit-transform: scale(0) translate(0);\n      transform: scale(0) translate(0);\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::after {\n      -webkit-transform: scale(1) translate(0, -17px);\n      transform: scale(1) translate(0, -17px);\n    }\n\n    /* paper-input */\n    .slider-input {\n      width: 50px;\n      overflow: hidden;\n      --paper-input-container-input: {\n        text-align: center;\n        @apply --paper-slider-input-container-input;\n      };\n      @apply --paper-slider-input;\n    }\n\n    /* disabled state */\n    #sliderContainer.disabled {\n      pointer-events: none;\n    }\n\n    .disabled > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      -webkit-transform: scale3d(0.75, 0.75, 1);\n      transform: scale3d(0.75, 0.75, 1);\n    }\n\n    .disabled.ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    paper-ripple {\n      color: var(--paper-slider-knob-color, var(--google-blue-700));\n    }\n  </style>\n\n  <div id=\"sliderContainer\" class\\$=\"[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]\">\n    <div class=\"bar-container\">\n      <paper-progress disabled\\$=\"[[disabled]]\" id=\"sliderBar\" aria-hidden=\"true\" min=\"[[min]]\" max=\"[[max]]\" step=\"[[step]]\" value=\"[[immediateValue]]\" secondary-progress=\"[[secondaryProgress]]\" on-down=\"_bardown\" on-up=\"_resetKnob\" on-track=\"_bartrack\" on-tap=\"_barclick\">\n      </paper-progress>\n    </div>\n\n    <template is=\"dom-if\" if=\"[[snaps]]\">\n      <div class=\"slider-markers\">\n        <template is=\"dom-repeat\" items=\"[[markers]]\">\n          <div class=\"slider-marker\"></div>\n        </template>\n      </div>\n    </template>\n\n    <div id=\"sliderKnob\" class=\"slider-knob\" on-down=\"_knobdown\" on-up=\"_resetKnob\" on-track=\"_onTrack\" on-transitionend=\"_knobTransitionEnd\">\n        <div class=\"slider-knob-inner\" value\\$=\"[[immediateValue]]\"></div>\n    </div>\n  </div>\n\n  <template is=\"dom-if\" if=\"[[editable]]\">\n    <paper-input id=\"input\" type=\"number\" step=\"[[step]]\" min=\"[[min]]\" max=\"[[max]]\" class=\"slider-input\" disabled\\$=\"[[disabled]]\" value=\"[[immediateValue]]\" on-change=\"_changeValue\" on-keydown=\"_inputKeyDown\" no-label-float>\n    </paper-input>\n  </template>\n"]);_templateObject20_593e7270f77111e88ec25b7f4da4f001=function _templateObject20_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject19_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: \"\";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id=\"progressContainer\">\n      <div id=\"secondaryProgress\" hidden$=\"[[_hideSecondaryProgress(secondaryRatio)]]\"></div>\n      <div id=\"primaryProgress\"></div>\n    </div>\n"],["\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: \"\";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id=\"progressContainer\">\n      <div id=\"secondaryProgress\" hidden\\$=\"[[_hideSecondaryProgress(secondaryRatio)]]\"></div>\n      <div id=\"primaryProgress\"></div>\n    </div>\n"]);_templateObject19_593e7270f77111e88ec25b7f4da4f001=function _templateObject19_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject18_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input's properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id=\"container\" no-label-float=\"[[noLabelFloat]]\" always-float-label=\"[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]\" auto-validate$=\"[[autoValidate]]\" disabled$=\"[[disabled]]\" invalid=\"[[invalid]]\">\n\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n\n      <label hidden$=\"[[!label]]\" aria-hidden=\"true\" for$=\"[[_inputId]]\" slot=\"label\">[[label]]</label>\n\n      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->\n      <iron-input bind-value=\"{{value}}\" slot=\"input\" class=\"input-element\" id$=\"[[_inputId]]\" maxlength$=\"[[maxlength]]\" allowed-pattern=\"[[allowedPattern]]\" invalid=\"{{invalid}}\" validator=\"[[validator]]\">\n        <input aria-labelledby$=\"[[_ariaLabelledBy]]\" aria-describedby$=\"[[_ariaDescribedBy]]\" disabled$=\"[[disabled]]\" title$=\"[[title]]\" type$=\"[[type]]\" pattern$=\"[[pattern]]\" required$=\"[[required]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" inputmode$=\"[[inputmode]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" min$=\"[[min]]\" max$=\"[[max]]\" step$=\"[[step]]\" name$=\"[[name]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" list$=\"[[list]]\" size$=\"[[size]]\" autocapitalize$=\"[[autocapitalize]]\" autocorrect$=\"[[autocorrect]]\" on-change=\"_onChange\" tabindex$=\"[[tabIndex]]\" autosave$=\"[[autosave]]\" results$=\"[[results]]\" accept$=\"[[accept]]\" multiple$=\"[[multiple]]\">\n      </iron-input>\n\n      <slot name=\"suffix\" slot=\"suffix\"></slot>\n\n      <template is=\"dom-if\" if=\"[[errorMessage]]\">\n        <paper-input-error aria-live=\"assertive\" slot=\"add-on\">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[charCounter]]\">\n        <paper-input-char-counter slot=\"add-on\"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  "],["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input's properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id=\"container\" no-label-float=\"[[noLabelFloat]]\" always-float-label=\"[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]\" auto-validate\\$=\"[[autoValidate]]\" disabled\\$=\"[[disabled]]\" invalid=\"[[invalid]]\">\n\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n\n      <label hidden\\$=\"[[!label]]\" aria-hidden=\"true\" for\\$=\"[[_inputId]]\" slot=\"label\">[[label]]</label>\n\n      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->\n      <iron-input bind-value=\"{{value}}\" slot=\"input\" class=\"input-element\" id\\$=\"[[_inputId]]\" maxlength\\$=\"[[maxlength]]\" allowed-pattern=\"[[allowedPattern]]\" invalid=\"{{invalid}}\" validator=\"[[validator]]\">\n        <input aria-labelledby\\$=\"[[_ariaLabelledBy]]\" aria-describedby\\$=\"[[_ariaDescribedBy]]\" disabled\\$=\"[[disabled]]\" title\\$=\"[[title]]\" type\\$=\"[[type]]\" pattern\\$=\"[[pattern]]\" required\\$=\"[[required]]\" autocomplete\\$=\"[[autocomplete]]\" autofocus\\$=\"[[autofocus]]\" inputmode\\$=\"[[inputmode]]\" minlength\\$=\"[[minlength]]\" maxlength\\$=\"[[maxlength]]\" min\\$=\"[[min]]\" max\\$=\"[[max]]\" step\\$=\"[[step]]\" name\\$=\"[[name]]\" placeholder\\$=\"[[placeholder]]\" readonly\\$=\"[[readonly]]\" list\\$=\"[[list]]\" size\\$=\"[[size]]\" autocapitalize\\$=\"[[autocapitalize]]\" autocorrect\\$=\"[[autocorrect]]\" on-change=\"_onChange\" tabindex\\$=\"[[tabIndex]]\" autosave\\$=\"[[autosave]]\" results\\$=\"[[results]]\" accept\\$=\"[[accept]]\" multiple\\$=\"[[multiple]]\">\n      </iron-input>\n\n      <slot name=\"suffix\" slot=\"suffix\"></slot>\n\n      <template is=\"dom-if\" if=\"[[errorMessage]]\">\n        <paper-input-error aria-live=\"assertive\" slot=\"add-on\">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[charCounter]]\">\n        <paper-input-char-counter slot=\"add-on\"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  "]);_templateObject18_593e7270f77111e88ec25b7f4da4f001=function _templateObject18_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject17_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      };\n    </style>\n\n    <slot></slot>\n"]);_templateObject17_593e7270f77111e88ec25b7f4da4f001=function _templateObject17_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject16_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn't apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class=\"floated-label-placeholder\" aria-hidden=\"true\" hidden=\"[[noLabelFloat]]\">&nbsp;</div>\n\n    <div class=\"input-wrapper\">\n      <span class=\"prefix\"><slot name=\"prefix\"></slot></span>\n\n      <div class$=\"[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]\" id=\"labelAndInputContainer\">\n        <slot name=\"label\"></slot>\n        <slot name=\"input\"></slot>\n      </div>\n\n      <span class=\"suffix\"><slot name=\"suffix\"></slot></span>\n    </div>\n\n    <div class$=\"[[_computeUnderlineClass(focused,invalid)]]\">\n      <div class=\"unfocused-line\"></div>\n      <div class=\"focused-line\"></div>\n    </div>\n\n    <div class$=\"[[_computeAddOnContentClass(focused,invalid)]]\">\n      <slot name=\"add-on\"></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn't apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class=\"floated-label-placeholder\" aria-hidden=\"true\" hidden=\"[[noLabelFloat]]\">&nbsp;</div>\n\n    <div class=\"input-wrapper\">\n      <span class=\"prefix\"><slot name=\"prefix\"></slot></span>\n\n      <div class\\$=\"[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]\" id=\"labelAndInputContainer\">\n        <slot name=\"label\"></slot>\n        <slot name=\"input\"></slot>\n      </div>\n\n      <span class=\"suffix\"><slot name=\"suffix\"></slot></span>\n    </div>\n\n    <div class\\$=\"[[_computeUnderlineClass(focused,invalid)]]\">\n      <div class=\"unfocused-line\"></div>\n      <div class=\"focused-line\"></div>\n    </div>\n\n    <div class\\$=\"[[_computeAddOnContentClass(focused,invalid)]]\">\n      <slot name=\"add-on\"></slot>\n    </div>\n"]);_templateObject16_593e7270f77111e88ec25b7f4da4f001=function _templateObject16_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject15_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n"]);_templateObject15_593e7270f77111e88ec25b7f4da4f001=function _templateObject15_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject14_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use `--primary-text-color` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of `--primary-text-color` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"],["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use \\`--primary-text-color\\` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of \\`--primary-text-color\\` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"]);_templateObject14_593e7270f77111e88ec25b7f4da4f001=function _templateObject14_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject13_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Material Design color palette for Google products */\n\n      --google-red-100: #f4c7c3;\n      --google-red-300: #e67c73;\n      --google-red-500: #db4437;\n      --google-red-700: #c53929;\n\n      --google-blue-100: #c6dafc;\n      --google-blue-300: #7baaf7;\n      --google-blue-500: #4285f4;\n      --google-blue-700: #3367d6;\n\n      --google-green-100: #b7e1cd;\n      --google-green-300: #57bb8a;\n      --google-green-500: #0f9d58;\n      --google-green-700: #0b8043;\n\n      --google-yellow-100: #fce8b2;\n      --google-yellow-300: #f7cb4d;\n      --google-yellow-500: #f4b400;\n      --google-yellow-700: #f09300;\n\n      --google-grey-100: #f5f5f5;\n      --google-grey-300: #e0e0e0;\n      --google-grey-500: #9e9e9e;\n      --google-grey-700: #616161;\n\n      /* Material Design color palette from online spec document */\n\n      --paper-red-50: #ffebee;\n      --paper-red-100: #ffcdd2;\n      --paper-red-200: #ef9a9a;\n      --paper-red-300: #e57373;\n      --paper-red-400: #ef5350;\n      --paper-red-500: #f44336;\n      --paper-red-600: #e53935;\n      --paper-red-700: #d32f2f;\n      --paper-red-800: #c62828;\n      --paper-red-900: #b71c1c;\n      --paper-red-a100: #ff8a80;\n      --paper-red-a200: #ff5252;\n      --paper-red-a400: #ff1744;\n      --paper-red-a700: #d50000;\n\n      --paper-pink-50: #fce4ec;\n      --paper-pink-100: #f8bbd0;\n      --paper-pink-200: #f48fb1;\n      --paper-pink-300: #f06292;\n      --paper-pink-400: #ec407a;\n      --paper-pink-500: #e91e63;\n      --paper-pink-600: #d81b60;\n      --paper-pink-700: #c2185b;\n      --paper-pink-800: #ad1457;\n      --paper-pink-900: #880e4f;\n      --paper-pink-a100: #ff80ab;\n      --paper-pink-a200: #ff4081;\n      --paper-pink-a400: #f50057;\n      --paper-pink-a700: #c51162;\n\n      --paper-purple-50: #f3e5f5;\n      --paper-purple-100: #e1bee7;\n      --paper-purple-200: #ce93d8;\n      --paper-purple-300: #ba68c8;\n      --paper-purple-400: #ab47bc;\n      --paper-purple-500: #9c27b0;\n      --paper-purple-600: #8e24aa;\n      --paper-purple-700: #7b1fa2;\n      --paper-purple-800: #6a1b9a;\n      --paper-purple-900: #4a148c;\n      --paper-purple-a100: #ea80fc;\n      --paper-purple-a200: #e040fb;\n      --paper-purple-a400: #d500f9;\n      --paper-purple-a700: #aa00ff;\n\n      --paper-deep-purple-50: #ede7f6;\n      --paper-deep-purple-100: #d1c4e9;\n      --paper-deep-purple-200: #b39ddb;\n      --paper-deep-purple-300: #9575cd;\n      --paper-deep-purple-400: #7e57c2;\n      --paper-deep-purple-500: #673ab7;\n      --paper-deep-purple-600: #5e35b1;\n      --paper-deep-purple-700: #512da8;\n      --paper-deep-purple-800: #4527a0;\n      --paper-deep-purple-900: #311b92;\n      --paper-deep-purple-a100: #b388ff;\n      --paper-deep-purple-a200: #7c4dff;\n      --paper-deep-purple-a400: #651fff;\n      --paper-deep-purple-a700: #6200ea;\n\n      --paper-indigo-50: #e8eaf6;\n      --paper-indigo-100: #c5cae9;\n      --paper-indigo-200: #9fa8da;\n      --paper-indigo-300: #7986cb;\n      --paper-indigo-400: #5c6bc0;\n      --paper-indigo-500: #3f51b5;\n      --paper-indigo-600: #3949ab;\n      --paper-indigo-700: #303f9f;\n      --paper-indigo-800: #283593;\n      --paper-indigo-900: #1a237e;\n      --paper-indigo-a100: #8c9eff;\n      --paper-indigo-a200: #536dfe;\n      --paper-indigo-a400: #3d5afe;\n      --paper-indigo-a700: #304ffe;\n\n      --paper-blue-50: #e3f2fd;\n      --paper-blue-100: #bbdefb;\n      --paper-blue-200: #90caf9;\n      --paper-blue-300: #64b5f6;\n      --paper-blue-400: #42a5f5;\n      --paper-blue-500: #2196f3;\n      --paper-blue-600: #1e88e5;\n      --paper-blue-700: #1976d2;\n      --paper-blue-800: #1565c0;\n      --paper-blue-900: #0d47a1;\n      --paper-blue-a100: #82b1ff;\n      --paper-blue-a200: #448aff;\n      --paper-blue-a400: #2979ff;\n      --paper-blue-a700: #2962ff;\n\n      --paper-light-blue-50: #e1f5fe;\n      --paper-light-blue-100: #b3e5fc;\n      --paper-light-blue-200: #81d4fa;\n      --paper-light-blue-300: #4fc3f7;\n      --paper-light-blue-400: #29b6f6;\n      --paper-light-blue-500: #03a9f4;\n      --paper-light-blue-600: #039be5;\n      --paper-light-blue-700: #0288d1;\n      --paper-light-blue-800: #0277bd;\n      --paper-light-blue-900: #01579b;\n      --paper-light-blue-a100: #80d8ff;\n      --paper-light-blue-a200: #40c4ff;\n      --paper-light-blue-a400: #00b0ff;\n      --paper-light-blue-a700: #0091ea;\n\n      --paper-cyan-50: #e0f7fa;\n      --paper-cyan-100: #b2ebf2;\n      --paper-cyan-200: #80deea;\n      --paper-cyan-300: #4dd0e1;\n      --paper-cyan-400: #26c6da;\n      --paper-cyan-500: #00bcd4;\n      --paper-cyan-600: #00acc1;\n      --paper-cyan-700: #0097a7;\n      --paper-cyan-800: #00838f;\n      --paper-cyan-900: #006064;\n      --paper-cyan-a100: #84ffff;\n      --paper-cyan-a200: #18ffff;\n      --paper-cyan-a400: #00e5ff;\n      --paper-cyan-a700: #00b8d4;\n\n      --paper-teal-50: #e0f2f1;\n      --paper-teal-100: #b2dfdb;\n      --paper-teal-200: #80cbc4;\n      --paper-teal-300: #4db6ac;\n      --paper-teal-400: #26a69a;\n      --paper-teal-500: #009688;\n      --paper-teal-600: #00897b;\n      --paper-teal-700: #00796b;\n      --paper-teal-800: #00695c;\n      --paper-teal-900: #004d40;\n      --paper-teal-a100: #a7ffeb;\n      --paper-teal-a200: #64ffda;\n      --paper-teal-a400: #1de9b6;\n      --paper-teal-a700: #00bfa5;\n\n      --paper-green-50: #e8f5e9;\n      --paper-green-100: #c8e6c9;\n      --paper-green-200: #a5d6a7;\n      --paper-green-300: #81c784;\n      --paper-green-400: #66bb6a;\n      --paper-green-500: #4caf50;\n      --paper-green-600: #43a047;\n      --paper-green-700: #388e3c;\n      --paper-green-800: #2e7d32;\n      --paper-green-900: #1b5e20;\n      --paper-green-a100: #b9f6ca;\n      --paper-green-a200: #69f0ae;\n      --paper-green-a400: #00e676;\n      --paper-green-a700: #00c853;\n\n      --paper-light-green-50: #f1f8e9;\n      --paper-light-green-100: #dcedc8;\n      --paper-light-green-200: #c5e1a5;\n      --paper-light-green-300: #aed581;\n      --paper-light-green-400: #9ccc65;\n      --paper-light-green-500: #8bc34a;\n      --paper-light-green-600: #7cb342;\n      --paper-light-green-700: #689f38;\n      --paper-light-green-800: #558b2f;\n      --paper-light-green-900: #33691e;\n      --paper-light-green-a100: #ccff90;\n      --paper-light-green-a200: #b2ff59;\n      --paper-light-green-a400: #76ff03;\n      --paper-light-green-a700: #64dd17;\n\n      --paper-lime-50: #f9fbe7;\n      --paper-lime-100: #f0f4c3;\n      --paper-lime-200: #e6ee9c;\n      --paper-lime-300: #dce775;\n      --paper-lime-400: #d4e157;\n      --paper-lime-500: #cddc39;\n      --paper-lime-600: #c0ca33;\n      --paper-lime-700: #afb42b;\n      --paper-lime-800: #9e9d24;\n      --paper-lime-900: #827717;\n      --paper-lime-a100: #f4ff81;\n      --paper-lime-a200: #eeff41;\n      --paper-lime-a400: #c6ff00;\n      --paper-lime-a700: #aeea00;\n\n      --paper-yellow-50: #fffde7;\n      --paper-yellow-100: #fff9c4;\n      --paper-yellow-200: #fff59d;\n      --paper-yellow-300: #fff176;\n      --paper-yellow-400: #ffee58;\n      --paper-yellow-500: #ffeb3b;\n      --paper-yellow-600: #fdd835;\n      --paper-yellow-700: #fbc02d;\n      --paper-yellow-800: #f9a825;\n      --paper-yellow-900: #f57f17;\n      --paper-yellow-a100: #ffff8d;\n      --paper-yellow-a200: #ffff00;\n      --paper-yellow-a400: #ffea00;\n      --paper-yellow-a700: #ffd600;\n\n      --paper-amber-50: #fff8e1;\n      --paper-amber-100: #ffecb3;\n      --paper-amber-200: #ffe082;\n      --paper-amber-300: #ffd54f;\n      --paper-amber-400: #ffca28;\n      --paper-amber-500: #ffc107;\n      --paper-amber-600: #ffb300;\n      --paper-amber-700: #ffa000;\n      --paper-amber-800: #ff8f00;\n      --paper-amber-900: #ff6f00;\n      --paper-amber-a100: #ffe57f;\n      --paper-amber-a200: #ffd740;\n      --paper-amber-a400: #ffc400;\n      --paper-amber-a700: #ffab00;\n\n      --paper-orange-50: #fff3e0;\n      --paper-orange-100: #ffe0b2;\n      --paper-orange-200: #ffcc80;\n      --paper-orange-300: #ffb74d;\n      --paper-orange-400: #ffa726;\n      --paper-orange-500: #ff9800;\n      --paper-orange-600: #fb8c00;\n      --paper-orange-700: #f57c00;\n      --paper-orange-800: #ef6c00;\n      --paper-orange-900: #e65100;\n      --paper-orange-a100: #ffd180;\n      --paper-orange-a200: #ffab40;\n      --paper-orange-a400: #ff9100;\n      --paper-orange-a700: #ff6500;\n\n      --paper-deep-orange-50: #fbe9e7;\n      --paper-deep-orange-100: #ffccbc;\n      --paper-deep-orange-200: #ffab91;\n      --paper-deep-orange-300: #ff8a65;\n      --paper-deep-orange-400: #ff7043;\n      --paper-deep-orange-500: #ff5722;\n      --paper-deep-orange-600: #f4511e;\n      --paper-deep-orange-700: #e64a19;\n      --paper-deep-orange-800: #d84315;\n      --paper-deep-orange-900: #bf360c;\n      --paper-deep-orange-a100: #ff9e80;\n      --paper-deep-orange-a200: #ff6e40;\n      --paper-deep-orange-a400: #ff3d00;\n      --paper-deep-orange-a700: #dd2c00;\n\n      --paper-brown-50: #efebe9;\n      --paper-brown-100: #d7ccc8;\n      --paper-brown-200: #bcaaa4;\n      --paper-brown-300: #a1887f;\n      --paper-brown-400: #8d6e63;\n      --paper-brown-500: #795548;\n      --paper-brown-600: #6d4c41;\n      --paper-brown-700: #5d4037;\n      --paper-brown-800: #4e342e;\n      --paper-brown-900: #3e2723;\n\n      --paper-grey-50: #fafafa;\n      --paper-grey-100: #f5f5f5;\n      --paper-grey-200: #eeeeee;\n      --paper-grey-300: #e0e0e0;\n      --paper-grey-400: #bdbdbd;\n      --paper-grey-500: #9e9e9e;\n      --paper-grey-600: #757575;\n      --paper-grey-700: #616161;\n      --paper-grey-800: #424242;\n      --paper-grey-900: #212121;\n\n      --paper-blue-grey-50: #eceff1;\n      --paper-blue-grey-100: #cfd8dc;\n      --paper-blue-grey-200: #b0bec5;\n      --paper-blue-grey-300: #90a4ae;\n      --paper-blue-grey-400: #78909c;\n      --paper-blue-grey-500: #607d8b;\n      --paper-blue-grey-600: #546e7a;\n      --paper-blue-grey-700: #455a64;\n      --paper-blue-grey-800: #37474f;\n      --paper-blue-grey-900: #263238;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n    }\n\n  </style>\n</custom-style>\n"]);_templateObject13_593e7270f77111e88ec25b7f4da4f001=function _templateObject13_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject12_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n"]);_templateObject12_593e7270f77111e88ec25b7f4da4f001=function _templateObject12_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject11_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Shared Styles */\n      --paper-font-common-base: {\n        font-family: 'Roboto', 'Noto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-code: {\n        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-expensive-kerning: {\n        text-rendering: optimizeLegibility;\n      };\n\n      --paper-font-common-nowrap: {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      };\n\n      /* Material Font Styles */\n\n      --paper-font-display4: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 112px;\n        font-weight: 300;\n        letter-spacing: -.044em;\n        line-height: 120px;\n      };\n\n      --paper-font-display3: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 56px;\n        font-weight: 400;\n        letter-spacing: -.026em;\n        line-height: 60px;\n      };\n\n      --paper-font-display2: {\n        @apply --paper-font-common-base;\n\n        font-size: 45px;\n        font-weight: 400;\n        letter-spacing: -.018em;\n        line-height: 48px;\n      };\n\n      --paper-font-display1: {\n        @apply --paper-font-common-base;\n\n        font-size: 34px;\n        font-weight: 400;\n        letter-spacing: -.01em;\n        line-height: 40px;\n      };\n\n      --paper-font-headline: {\n        @apply --paper-font-common-base;\n\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -.012em;\n        line-height: 32px;\n      };\n\n      --paper-font-title: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 28px;\n      };\n\n      --paper-font-subhead: {\n        @apply --paper-font-common-base;\n\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n      };\n\n      --paper-font-body2: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-body1: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n      };\n\n      --paper-font-caption: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 12px;\n        font-weight: 400;\n        letter-spacing: 0.011em;\n        line-height: 20px;\n      };\n\n      --paper-font-menu: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-button: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.018em;\n        line-height: 24px;\n        text-transform: uppercase;\n      };\n\n      --paper-font-code2: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n      };\n\n      --paper-font-code1: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n      };\n\n    }\n\n  </style>\n</custom-style>"]);_templateObject11_593e7270f77111e88ec25b7f4da4f001=function _templateObject11_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject10_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id=\"content\"></slot>\n"]);_templateObject10_593e7270f77111e88ec25b7f4da4f001=function _templateObject10_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject9_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$=\"[[mode]]\">[[_text]]</div>\n"]);_templateObject9_593e7270f77111e88ec25b7f4da4f001=function _templateObject9_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject8_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n  <style include=\"paper-material-styles\">\n    /* Need to specify the same specificity as the styles imported from paper-material. */\n    :host {\n      @apply --layout-inline;\n      @apply --layout-center-center;\n      position: relative;\n      box-sizing: border-box;\n      min-width: 5.14em;\n      margin: 0 0.29em;\n      background: transparent;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      -webkit-tap-highlight-color: transparent;\n      font: inherit;\n      text-transform: uppercase;\n      outline-width: 0;\n      border-radius: 3px;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      z-index: 0;\n      padding: 0.7em 0.57em;\n\n      @apply --paper-font-common-base;\n      @apply --paper-button;\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n\n    :host([hidden]) {\n      display: none !important;\n    }\n\n    :host([raised].keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-raised-keyboard-focus;\n    }\n\n    :host(:not([raised]).keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-flat-keyboard-focus;\n    }\n\n    :host([disabled]) {\n      background: none;\n      color: #a8a8a8;\n      cursor: auto;\n      pointer-events: none;\n\n      @apply --paper-button-disabled;\n    }\n\n    :host([disabled][raised]) {\n      background: #eaeaea;\n    }\n\n\n    :host([animated]) {\n      @apply --shadow-transition;\n    }\n\n    paper-ripple {\n      color: var(--paper-button-ink-color);\n    }\n  </style>\n\n  <slot></slot>"]);_templateObject8_593e7270f77111e88ec25b7f4da4f001=function _templateObject8_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject7_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler \"interrupts\" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id=\"background\"></div>\n    <div id=\"waves\"></div>\n"]);_templateObject7_593e7270f77111e88ec25b7f4da4f001=function _templateObject7_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject6_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<dom-module id=\"paper-material-styles\">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation=\"1\"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation=\"2\"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation=\"3\"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation=\"4\"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation=\"5\"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject6_593e7270f77111e88ec25b7f4da4f001=function _templateObject6_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject5_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      --shadow-transition: {\n        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n      };\n\n      --shadow-none: {\n        box-shadow: none;\n      };\n\n      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */\n\n      --shadow-elevation-2dp: {\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      };\n\n      --shadow-elevation-3dp: {\n        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 8px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 3px -2px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-4dp: {\n        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 10px 0 rgba(0, 0, 0, 0.12),\n                    0 2px 4px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-6dp: {\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 18px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 5px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-8dp: {\n        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n                    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-12dp: {\n        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),\n                    0 4px 22px 3px rgba(0, 0, 0, 0.12),\n                    0 6px 7px -4px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-16dp: {\n        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),\n                    0  6px 30px 5px rgba(0, 0, 0, 0.12),\n                    0  8px 10px -5px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-24dp: {\n        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),\n                    0 9px 46px 8px rgba(0, 0, 0, 0.12),\n                    0 11px 15px -7px rgba(0, 0, 0, 0.4);\n      };\n    }\n  </style>\n</custom-style>"]);_templateObject5_593e7270f77111e88ec25b7f4da4f001=function _templateObject5_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject4_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>"]);_templateObject4_593e7270f77111e88ec25b7f4da4f001=function _templateObject4_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject3_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style include=\"prism-theme-default\">\n      :host {\n        display: block;\n\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n        margin-bottom: 40px;\n        @apply --demo-snippet;\n      }\n\n      .demo {\n        display: block;\n        border-bottom: 1px solid #e0e0e0;\n        background-color: white;\n        margin: 0;\n        padding: 20px;\n        @apply --demo-snippet-demo;\n      }\n\n      .code-container {\n        margin: 0;\n        background-color: #f5f5f5;\n        font-size: 13px;\n        overflow: auto;\n        position: relative;\n        padding: 0 20px;\n        @apply --demo-snippet-code;\n      }\n\n      .code {\n        padding: 20px;\n        margin: 0;\n        background-color: var(--google-grey-100);\n        font-size: 13px;\n        overflow: auto;\n        @apply --demo-snippet-code;\n      }\n      .code > pre {\n        margin: 0;\n        padding: 0 0 10px 0;\n      }\n\n      button {\n        position: absolute;\n        top: 0;\n        right: 0px;\n        text-transform: uppercase;\n        border: none;\n        cursor: pointer;\n        background: #e0e0e0;\n      }\n    </style>\n\n    <prism-highlighter></prism-highlighter>\n\n    <div class=\"demo\">\n      <slot id=\"content\"></slot>\n    </div>\n\n    <div class=\"code-container\">\n      <marked-element markdown=\"[[_markdown]]\" id=\"marked\">\n         <div class=\"code\" slot=\"markdown-html\" id=\"code\"></div>\n      </marked-element>\n      <button id=\"copyButton\" title=\"copy to clipboard\" on-tap=\"_copyToClipboard\">Copy</button>\n    </div>\n"]);_templateObject3_593e7270f77111e88ec25b7f4da4f001=function _templateObject3_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject2_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n<dom-module id=\"prism-theme-default\">\n  <template>\n    <style>\n    /**\n    * prism.js default theme for JavaScript, CSS and HTML\n    * Based on dabblet (http://dabblet.com)\n    * @author Lea Verou\n    */\n    code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n    color: black;\n    background: none;\n    text-shadow: 0 1px white;\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n    }\n\n    pre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\n    code[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc;\n    }\n\n    pre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\n    code[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n    text-shadow: none;\n    background: #b3d4fc;\n    }\n\n    @media print {\n    code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      text-shadow: none;\n    }\n    }\n\n    /* Code blocks */\n    pre[class*=\"language-\"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n    }\n\n    :not(pre) > code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n    background: #f5f2f0;\n    }\n\n    /* Inline code */\n    :not(pre) > code[class*=\"language-\"] {\n    padding: .1em;\n    border-radius: .3em;\n    white-space: normal;\n    }\n\n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n    color: slategray;\n    }\n\n    .token.punctuation {\n    color: #999;\n    }\n\n    .namespace {\n    opacity: .7;\n    }\n\n    .token.property,\n    .token.tag,\n    .token.boolean,\n    .token.number,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n    color: #905;\n    }\n\n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n    color: #690;\n    }\n\n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string {\n    color: #a67f59;\n    background: hsla(0, 0%, 100%, .5);\n    }\n\n    .token.atrule,\n    .token.attr-value,\n    .token.keyword {\n    color: #07a;\n    }\n\n    .token.function {\n    color: #DD4A68;\n    }\n\n    .token.regex,\n    .token.important,\n    .token.variable {\n    color: #e90;\n    }\n\n    .token.important,\n    .token.bold {\n    font-weight: bold;\n    }\n    .token.italic {\n    font-style: italic;\n    }\n\n    .token.entity {\n    cursor: help;\n    }\n    </style>\n  </template>\n</dom-module>"]);_templateObject2_593e7270f77111e88ec25b7f4da4f001=function _templateObject2_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _templateObject_593e7270f77111e88ec25b7f4da4f001(){var data=_taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <slot name=\"markdown-html\">\n      <div id=\"content\"></div>\n    </slot>\n  "]);_templateObject_593e7270f77111e88ec25b7f4da4f001=function _templateObject_593e7270f77111e88ec25b7f4da4f001(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _instanceof(left,right){if(right!=null&&typeof Symbol!=="undefined"&&right[Symbol.hasInstance]){return right[Symbol.hasInstance](left);}else{return left instanceof right;}}function _classCallCheck(instance,Constructor){if(!_instanceof(instance,Constructor)){throw new TypeError("Cannot call a class as a function");}}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}(function(global,factory){(typeof exports==="undefined"?"undefined":_typeof(exports))==='object'&&typeof module!=='undefined'?factory():typeof define==='function'&&define.amd?define(factory):factory();})(this,function(){'use strict';/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var nativeShadow=!(window['ShadyDOM']&&window['ShadyDOM']['inUse']);var nativeCssVariables_;/**
   * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
   */function calcCssVariables(settings){if(settings&&settings['shimcssproperties']){nativeCssVariables_=false;}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports('box-shadow','0 0 0 var(--foo)'));}}if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==undefined){nativeCssVariables_=window.ShadyCSS.nativeCss;}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=undefined;}else{calcCssVariables(window['WebComponents']&&window['WebComponents']['flags']);}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
var nativeCssVariables=/** @type {boolean} */nativeCssVariables_;/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /** @unrestricted */var StyleNode=function StyleNode(){_classCallCheck(this,StyleNode);/** @type {number} */this['start']=0;/** @type {number} */this['end']=0;/** @type {StyleNode} */this['previous']=null;/** @type {StyleNode} */this['parent']=null;/** @type {Array<StyleNode>} */this['rules']=null;/** @type {string} */this['parsedCssText']='';/** @type {string} */this['cssText']='';/** @type {boolean} */this['atRule']=false;/** @type {number} */this['type']=0;/** @type {string} */this['keyframesName']='';/** @type {string} */this['selector']='';/** @type {string} */this['parsedSelector']='';};// given a string of css, return a simple rule tree
/**
   * @param {string} text
   * @return {StyleNode}
   */function parse(text){text=clean(text);return parseCss(lex(text),text);}// remove stuff we don't care about that may hinder parsing
/**
   * @param {string} cssText
   * @return {string}
   */function clean(cssText){return cssText.replace(RX.comments,'').replace(RX.port,'');}// super simple {...} lexer that returns a node tree
/**
   * @param {string} text
   * @return {StyleNode}
   */function lex(text){var root=new StyleNode();root['start']=0;root['end']=text.length;var n=root;for(var i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n['rules']){n['rules']=[];}var _p=n;var previous=_p['rules'][_p['rules'].length-1]||null;n=new StyleNode();n['start']=i+1;n['parent']=_p;n['previous']=previous;_p['rules'].push(n);}else if(text[i]===CLOSE_BRACE){n['end']=i+1;n=n['parent']||root;}}return root;}// add selectors/cssText to node tree
/**
   * @param {StyleNode} node
   * @param {string} text
   * @return {StyleNode}
   */function parseCss(node,text){var t=text.substring(node['start'],node['end']-1);node['parsedCssText']=node['cssText']=t.trim();if(node['parent']){var ss=node['previous']?node['previous']['end']:node['parent']['start'];t=text.substring(ss,node['start']-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces,' ');// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(';')+1);var s=node['parsedSelector']=node['selector']=t.trim();node['atRule']=s.indexOf(AT_START)===0;// note, support a subset of rule types...
if(node['atRule']){if(s.indexOf(MEDIA_START)===0){node['type']=types.MEDIA_RULE;}else if(s.match(RX.keyframesRule)){node['type']=types.KEYFRAMES_RULE;node['keyframesName']=node['selector'].split(RX.multipleSpaces).pop();}}else{if(s.indexOf(VAR_START)===0){node['type']=types.MIXIN_RULE;}else{node['type']=types.STYLE_RULE;}}}var r$=node['rules'];if(r$){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text);}}return node;}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){var code=arguments[1],repeat=6-code.length;while(repeat--){code='0'+code;}return'\\'+code;});}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties){var text=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';// calc rule cssText
var cssText='';if(node['cssText']||node['rules']){var r$=node['rules'];if(r$&&!_hasMixinRules(r$)){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText);}}else{cssText=preserveProperties?node['cssText']:removeCustomProps(node['cssText']);cssText=cssText.trim();if(cssText){cssText='  '+cssText+'\n';}}}// emit rule if there is cssText
if(cssText){if(node['selector']){text+=node['selector']+' '+OPEN_BRACE+'\n';}text+=cssText;if(node['selector']){text+=CLOSE_BRACE+'\n\n';}}return text;}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){var r=rules[0];return Boolean(r)&&Boolean(r['selector'])&&r['selector'].indexOf(VAR_START)===0;}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText);}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,'').replace(RX.mixinProp,'');}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,'').replace(RX.varApply,'');}/** @enum {number} */var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1000};var OPEN_BRACE='{';var CLOSE_BRACE='}';// helper regexp's
var RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g};var VAR_START='--';var MEDIA_START='@media';var AT_START='@';/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;var MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;var MEDIA_MATCH=/@media\s(.*)/;/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /** @type {!Set<string>} */var styleTextSet=new Set();var scopingAttribute='shady-unscoped';/**
   * Add a specifically-marked style to the document directly, and only one copy of that style.
   *
   * @param {!HTMLStyleElement} style
   * @return {undefined}
   */function processUnscopedStyle(style){var text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);var newStyle=style.cloneNode(true);document.head.appendChild(newStyle);}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute);}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @param {string|StyleNode} rules
   * @param {function(StyleNode)=} callback
   * @return {string}
   */function toCssText(rules,callback){if(!rules){return'';}if(typeof rules==='string'){rules=parse(rules);}if(callback){forEachRule(rules,callback);}return stringify(rules,nativeCssVariables);}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style['__cssRules']&&style.textContent){style['__cssRules']=parse(style.textContent);}return style['__cssRules']||null;}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return;}var skipRules=false;var type=node['type'];if(onlyActiveRules){if(type===types.MEDIA_RULE){var matchMedia=node['selector'].match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=true;}}}}if(type===types.STYLE_RULE){styleRuleCallback(node);}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node);}else if(type===types.MIXIN_RULE){skipRules=true;}var r$=node['rules'];if(r$&&!skipRules){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules);}}}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){var level=0;for(var i=start,l=text.length;i<l;i++){if(text[i]==='('){level++;}else if(text[i]===')'){if(--level===0){return i;}}}return-1;}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
var start=str.indexOf('var(');if(start===-1){// no var?, everything is prefix
return callback(str,'','','');}//${prefix}var(${inner})${suffix}
var end=findMatchingParen(str,start+3);var inner=str.substring(start+4,end);var prefix=str.substring(0,start);// suffix may have other variables
var suffix=processVariableAndFallback(str.substring(end+1),callback);var comma=inner.indexOf(',');// value and fallback args should be trimmed to match in property lookup
if(comma===-1){// variable, no fallback
return callback(prefix,inner.trim(),'',suffix);}// var(${value},${fallback})
var value=inner.substring(0,comma).trim();var fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix);}/**
   * @param {Element | {is: string, extends: string}} element
   * @return {{is: string, typeExtension: string}}
   */function getIsExtends(element){var localName=element['localName'];var is='',typeExtension='';/*
    NOTE: technically, this can be wrong for certain svg elements
    with `-` in the name like `<font-face>`
    */if(localName){if(localName.indexOf('-')>-1){is=localName;}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute('is')||'';}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends;}return{is:is,typeExtension:typeExtension};}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */var styleTextParts=[];var styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll('style');for(var i=0;i<styles.length;i++){var _style=styles[i];if(isUnscopedStyle(_style)){if(!nativeShadow){processUnscopedStyle(_style);_style.parentNode.removeChild(_style);}}else{styleTextParts.push(_style.textContent);_style.parentNode.removeChild(_style);}}return styleTextParts.join('').trim();}var CSS_BUILD_ATTR='css-build';/**
   * Return the polymer-css-build "build type" applied to this element
   *
   * @param {!HTMLElement} element
   * @return {string} Can be "", "shady", or "shadow"
   */function getCssBuild(element){if(element.__cssBuild===undefined){// try attribute first, as it is the common case
var attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue;}else{var buildComment=getBuildComment(element);if(buildComment!==''){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element);}element.__cssBuild=buildComment;}}return element.__cssBuild||'';}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return getCssBuild(element)!=='';}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){var buildComment=element.localName==='template'?element.content.firstChild:element.firstChild;if(_instanceof(buildComment,Comment)){var commentParts=buildComment.textContent.trim().split(':');if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1];}}return'';}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){var buildComment=element.localName==='template'?element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment);}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @param {Element} element
   * @param {Object=} properties
   */function updateNativeProperties(element,properties){// remove previous properties
for(var _p2 in properties){// NOTE: for bc with shim, don't apply null values.
if(_p2===null){element.style.removeProperty(_p2);}else{element.style.setProperty(_p2,properties[_p2]);}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function _getComputedStyleValue(element,property){/**
     * @const {string}
     */var value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return'';}else{return value.trim();}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function _detectMixin(cssText){var has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has;}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var APPLY_NAME_CLEAN=/;\s*/m;var INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/;var IMPORTANT=/\s*!important/;// separator used between mixin-name and mixin-property-name when producing properties
// NOTE: plain '-' may cause collisions in user styles
var MIXIN_VAR_SEP='_-_';// map of mixin to property names
// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
var MixinMap=/*#__PURE__*/function(){function MixinMap(){_classCallCheck(this,MixinMap);/** @type {!Object<string, !MixinMapEntry>} */this._map={};}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */_createClass(MixinMap,[{key:"set",value:function set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}};}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */},{key:"get",value:function get(name){name=name.trim();return this._map[name]||null;}}]);return MixinMap;}();/**
   * Callback for when an element is marked invalid
   * @type {?function(string)}
   */var invalidCallback=null;/** @unrestricted */var ApplyShim=/*#__PURE__*/function(){function ApplyShim(){_classCallCheck(this,ApplyShim);/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap();}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */_createClass(ApplyShim,[{key:"detectMixin",value:function detectMixin(cssText){return _detectMixin(cssText);}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */},{key:"gatherStyles",value:function gatherStyles(template){var styleText=gatherStyleText(template.content);if(styleText){var _style2=/** @type {!HTMLStyleElement} */document.createElement('style');_style2.textContent=styleText;template.content.insertBefore(_style2,template.content.firstChild);return _style2;}return null;}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformTemplate",value:function transformTemplate(template,elementName){if(template._gatheredStyle===undefined){template._gatheredStyle=this.gatherStyles(template);}/** @type {HTMLStyleElement} */var style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null;}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformStyle",value:function transformStyle(style){var elementName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast;}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */},{key:"transformCustomStyle",value:function transformCustomStyle(style){var _this=this;var ast=rulesForStyle(style);forEachRule(ast,function(rule){if(rule['selector']===':root'){rule['selector']='html';}_this.transformRule(rule);});style.textContent=toCssText(ast);return ast;}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */},{key:"transformRules",value:function transformRules(rules,elementName){var _this2=this;this._currentElement=elementName;forEachRule(rules,function(r){_this2.transformRule(r);});this._currentElement=null;}/**
     * @param {!StyleNode} rule
     */},{key:"transformRule",value:function transformRule(rule){rule['cssText']=this.transformCssText(rule['parsedCssText'],rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(rule['selector']===':root'){rule['selector']=':host > *';}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"transformCssText",value:function transformCssText(cssText,rule){var _this3=this;// produce variables
cssText=cssText.replace(VAR_ASSIGN,function(matchText,propertyName,valueProperty,valueMixin){return _this3._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule);});// consume mixins
return this._consumeCssProperties(cssText,rule);}/**
     * @param {string} property
     * @return {string}
     */},{key:"_getInitialValueForProperty",value:function _getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement('meta');this._measureElement.setAttribute('apply-shim-measure','');this._measureElement.style.all='initial';document.head.appendChild(this._measureElement);}return window.getComputedStyle(this._measureElement).getPropertyValue(property);}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */},{key:"_fallbacksFromPreviousRules",value:function _fallbacksFromPreviousRules(startRule){var _this4=this;// find the "top" rule
var topRule=startRule;while(topRule['parent']){topRule=topRule['parent'];}var fallbacks={};var seenStartRule=false;forEachRule(topRule,function(r){// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return;}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r['selector']===startRule['selector']){Object.assign(fallbacks,_this4._cssTextToMap(r['parsedCssText']));}});return fallbacks;}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */},{key:"_consumeCssProperties",value:function _consumeCssProperties(text,rule){/** @type {Array} */var m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){var matchText=m[0];var mixinName=m[1];var idx=m.index;// collect properties before apply to be "defaults" if mixin might override them
// match includes a "prefix", so find the start and end positions of @apply
var applyPos=idx+matchText.indexOf('@apply');var afterApplyPos=idx+matchText.length;// find props defined before this @apply
var textBeforeApply=text.slice(0,applyPos);var textAfterApply=text.slice(afterApplyPos);var defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));var replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text="".concat(textBeforeApply).concat(replacement).concat(textAfterApply);// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length;}return text;}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */},{key:"_atApplyToCssProperties",value:function _atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,'');var vars=[];var mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName);}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=true;}var _p3,parts,f;var properties=mixinEntry.properties;for(_p3 in properties){f=fallbacks&&fallbacks[_p3];parts=[_p3,': var(',mixinName,MIXIN_VAR_SEP,_p3];if(f){parts.push(',',f.replace(IMPORTANT,''));}parts.push(')');if(IMPORTANT.test(properties[_p3])){parts.push(' !important');}vars.push(parts.join(''));}}return vars.join('; ');}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */},{key:"_replaceInitialOrInherit",value:function _replaceInitialOrInherit(property,value){var match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property);}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value='apply-shim-inherit';}}return value;}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @return {!Object<string, string>}
     */},{key:"_cssTextToMap",value:function _cssTextToMap(text){var props=text.split(';');var property,value;var out={};for(var i=0,_p4,sp;i<props.length;i++){_p4=props[i];if(_p4){sp=_p4.split(':');// ignore lines that aren't definitions like @media
if(sp.length>1){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=this._replaceInitialOrInherit(property,sp.slice(1).join(':'));out[property]=value;}}}return out;}/**
     * @param {MixinMapEntry} mixinEntry
     */},{key:"_invalidateMixinEntry",value:function _invalidateMixinEntry(mixinEntry){if(!invalidCallback){return;}for(var elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName);}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"_produceCssProperties",value:function _produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){var _this5=this;// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,function(prefix,value){if(value&&_this5._map.get(value)){valueMixin="@apply ".concat(value,";");}});}if(!valueMixin){return matchText;}var mixinAsProperties=this._consumeCssProperties(''+valueMixin,rule);var prefix=matchText.slice(0,matchText.indexOf('--'));var mixinValues=this._cssTextToMap(mixinAsProperties);var combinedProps=mixinValues;var mixinEntry=this._map.get(propertyName);var oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues);}else{this._map.set(propertyName,combinedProps);}var out=[];var p,v;// set variables defined by current mixin
var needToInvalidate=false;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===undefined){v='initial';}if(oldProps&&!(p in oldProps)){needToInvalidate=true;}out.push("".concat(propertyName).concat(MIXIN_VAR_SEP).concat(p,": ").concat(v));}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry);}if(mixinEntry){mixinEntry.properties=combinedProps;}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix="".concat(matchText,";").concat(prefix);}return"".concat(prefix).concat(out.join('; '),";");}}]);return ApplyShim;}();/* exports */ApplyShim.prototype['detectMixin']=ApplyShim.prototype.detectMixin;ApplyShim.prototype['transformStyle']=ApplyShim.prototype.transformStyle;ApplyShim.prototype['transformCustomStyle']=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype['transformRules']=ApplyShim.prototype.transformRules;ApplyShim.prototype['transformRule']=ApplyShim.prototype.transformRule;ApplyShim.prototype['transformTemplate']=ApplyShim.prototype.transformTemplate;ApplyShim.prototype['_separator']=MIXIN_VAR_SEP;Object.defineProperty(ApplyShim.prototype,'invalidCallback',{/** @return {?function(string)} */get:function get(){return invalidCallback;},/** @param {?function(string)} cb */set:function set(cb){invalidCallback=cb;}});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @const {!Object<string, !HTMLTemplateElement>}
   */var templateMap={};/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /*
   * Utilities for handling invalidating apply-shim mixins for a given template.
   *
   * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
   * The template
   */ /** @const {string} */var CURRENT_VERSION='_applyShimCurrentVersion';/** @const {string} */var NEXT_VERSION='_applyShimNextVersion';/** @const {string} */var VALIDATING_VERSION='_applyShimValidatingVersion';/**
   * @const {Promise<void>}
   */var promise=Promise.resolve();/**
   * @param {string} elementName
   */function invalidate(elementName){var template=templateMap[elementName];if(template){invalidateTemplate(template);}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1;}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION];}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION];}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=true;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=false;});}}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /** @type {Promise<void>} */var readyPromise=null;/** @type {?function(?function())} */var whenReady=window['HTMLImports']&&window['HTMLImports']['whenReady']||null;/** @type {function()} */var resolveFn;/**
   * @param {?function()} callback
   */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback);}else{if(!readyPromise){readyPromise=new Promise(function(resolve){resolveFn=resolve;});if(document.readyState==='complete'){resolveFn();}else{document.addEventListener('readystatechange',function(){if(document.readyState==='complete'){resolveFn();}});}}readyPromise.then(function(){callback&&callback();});}});}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var SEEN_MARKER='__seenByShadyCSS';var CACHED_STYLE='__shadyCSSCachedStyle';/** @type {?function(!HTMLStyleElement)} */var transformFn=null;/** @type {?function()} */var validateFn=null;/**
  This interface is provided to add document-level <style> elements to ShadyCSS for processing.
  These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
  In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties

  To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`

  In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
  This function will be called when calculating styles.

  An example usage of the document-level styling api can be found in `examples/document-style-lib.js`

  @unrestricted
  */var CustomStyleInterface=/*#__PURE__*/function(){function CustomStyleInterface(){_classCallCheck(this,CustomStyleInterface);/** @type {!Array<!CustomStyleProvider>} */this['customStyles']=[];this['enqueued']=false;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(function(){if(window['ShadyCSS']['flushCustomStyles']){window['ShadyCSS']['flushCustomStyles']();}});}/**
     * Queue a validation for new custom styles to batch style recalculations
     */_createClass(CustomStyleInterface,[{key:"enqueueDocumentValidation",value:function enqueueDocumentValidation(){if(this['enqueued']||!validateFn){return;}this['enqueued']=true;documentWait(validateFn);}/**
     * @param {!HTMLStyleElement} style
     */},{key:"addCustomStyle",value:function addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=true;this['customStyles'].push(style);this.enqueueDocumentValidation();}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */},{key:"getStyleForCustomStyle",value:function getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE];}var style;if(customStyle['getStyle']){style=customStyle['getStyle']();}else{style=customStyle;}return style;}/**
     * @return {!Array<!CustomStyleProvider>}
     */},{key:"processStyles",value:function processStyles(){var cs=this['customStyles'];for(var i=0;i<cs.length;i++){var customStyle=cs[i];if(customStyle[CACHED_STYLE]){continue;}var _style3=this.getStyleForCustomStyle(customStyle);if(_style3){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
var styleToTransform=/** @type {!HTMLStyleElement} */_style3['__appliedElement']||_style3;if(transformFn){transformFn(styleToTransform);}customStyle[CACHED_STYLE]=styleToTransform;}}return cs;}}]);return CustomStyleInterface;}();CustomStyleInterface.prototype['addCustomStyle']=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype['getStyleForCustomStyle']=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype['processStyles']=CustomStyleInterface.prototype.processStyles;Object.defineProperties(CustomStyleInterface.prototype,{'transformCallback':{/** @return {?function(!HTMLStyleElement)} */get:function get(){return transformFn;},/** @param {?function(!HTMLStyleElement)} fn */set:function set(fn){transformFn=fn;}},'validateCallback':{/** @return {?function()} */get:function get(){return validateFn;},/**
       * @param {?function()} fn
       * @this {CustomStyleInterface}
       */set:function set(fn){var needsEnqueue=false;if(!validateFn){needsEnqueue=true;}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation();}}}});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /** @const {ApplyShim} */var applyShim=new ApplyShim();var ApplyShimInterface=/*#__PURE__*/function(){function ApplyShimInterface(){_classCallCheck(this,ApplyShimInterface);/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim['invalidCallback']=invalidate;}_createClass(ApplyShimInterface,[{key:"ensure",value:function ensure(){var _this6=this;if(this.customStyleInterface){return;}this.customStyleInterface=window.ShadyCSS.CustomStyleInterface;if(this.customStyleInterface){this.customStyleInterface['transformCallback']=function(style){applyShim.transformCustomStyle(style);};this.customStyleInterface['validateCallback']=function(){requestAnimationFrame(function(){if(_this6.customStyleInterface['enqueued']){_this6.flushCustomStyles();}});};}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */},{key:"prepareTemplate",value:function prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return;}templateMap[elementName]=template;var ast=applyShim.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template['_styleAst']=ast;}},{key:"flushCustomStyles",value:function flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return;}var styles=this.customStyleInterface['processStyles']();if(!this.customStyleInterface['enqueued']){return;}for(var i=0;i<styles.length;i++){var cs=styles[i];var _style4=this.customStyleInterface['getStyleForCustomStyle'](cs);if(_style4){applyShim.transformCustomStyle(_style4);}}this.customStyleInterface['enqueued']=false;}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */},{key:"styleSubtree",value:function styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties);}if(element.shadowRoot){this.styleElement(element);var shadowChildren=element.shadowRoot.children||element.shadowRoot.childNodes;for(var i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i]);}}else{var children=element.children||element.childNodes;for(var _i=0;_i<children.length;_i++){this.styleSubtree(/** @type {HTMLElement} */children[_i]);}}}/**
     * @param {HTMLElement} element
     */},{key:"styleElement",value:function styleElement(element){this.ensure();var _getIsExtends=getIsExtends(element),is=_getIsExtends.is;var template=templateMap[is];if(template&&elementHasBuiltCss(template)){return;}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template);}// update this element instance
var _root=element.shadowRoot;if(_root){var _style5=/** @type {HTMLStyleElement} */_root.querySelector('style');if(_style5){// reuse the template's style ast, it has all the original css text
_style5['__cssRules']=template['_styleAst'];_style5.textContent=toCssText(template['_styleAst']);}}}}/**
     * @param {Object=} properties
     */},{key:"styleDocument",value:function styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties);}}]);return ApplyShimInterface;}();if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var applyShimInterface=new ApplyShimInterface();var CustomStyleInterface$$1=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName);},/**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){this.prepareTemplate(template,elementName,elementExtends);},/**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
       * @param {!HTMLElement} element
       * @param {Object=} properties
       */styleSubtree:function styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties);},/**
       * @param {!HTMLElement} element
       */styleElement:function styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element);},/**
       * @param {Object=} properties
       */styleDocument:function styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties);},/**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property);},flushCustomStyles:function flushCustomStyles(){applyShimInterface.flushCustomStyles();},nativeCss:nativeCssVariables,nativeShadow:nativeShadow};if(CustomStyleInterface$$1){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface$$1;}}window.ShadyCSS.ApplyShim=applyShim;/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /* eslint-disable no-unused-vars */ /**
   * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
   * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
   *
   * @param {string} prop Property name
   * @param {?Object} obj Reference object
   * @return {string} Potentially renamed property name
   */window.JSCompiler_renameProperty=function(prop,obj){return prop;};/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var CSS_URL_RX=/(url\()([^)]*)(\))/g;var ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/;var workingURL;var resolveDoc;/**
   * Resolves the given URL against the provided `baseUri'.
   *
   * Note that this function performs no resolution for URLs that start
   * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
   * URL resolution, use `window.URL`.
   *
   * @param {string} url Input URL to resolve
   * @param {?string=} baseURI Base URI to resolve the URL against
   * @return {string} resolved URL
   */function _resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url;}// Lazy feature detection.
if(workingURL===undefined){workingURL=false;try{var u=new URL('b','http://a');u.pathname='c%20d';workingURL=u.href==='http://a/c%20d';}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href;}if(workingURL){return new URL(url,baseURI).href;}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument('temp');resolveDoc.base=resolveDoc.createElement('base');resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement('a');resolveDoc.body.appendChild(resolveDoc.anchor);}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url;}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+'\''+_resolveUrl(url.replace(/["']/g,''),baseURI)+'\''+post;});}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf('/')+1);}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var useShadow=!window.ShadyDOM;var useNativeCSSProperties=Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);var useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;/**
   * Globally settable property that is automatically assigned to
   * `ElementMixin` instances, useful for binding in templates to
   * make URL's relative to an application's root.  Defaults to the main
   * document URL, but can be overridden by users.  It may be useful to set
   * `rootPath` to provide a stable application mount path when
   * using client side routing.
   */var rootPath=pathFromUrl(document.baseURI||window.location.href);/**
   * A global callback used to sanitize any value before inserting it into the DOM.
   * The callback signature is:
   *
   *  function sanitizeDOMValue(value, name, type, node) { ... }
   *
   * Where:
   *
   * `value` is the value to sanitize.
   * `name` is the name of an attribute or property (for example, href).
   * `type` indicates where the value is being inserted: one of property, attribute, or text.
   * `node` is the node where the value is being inserted.
   *
   * @type {(function(*,string,string,Node):*)|undefined}
   */var sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||undefined;/**
   * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
   * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
   * scrolling performance.
   * Defaults to `false` for backwards compatibility.
   */var passiveTouchGestures=false;/**
   * Setting to ensure Polymer template evaluation only occurs based on tempates
   * defined in trusted script.  When true, `<dom-module>` re-registration is
   * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
   * templates will only evaluate in the context of a trusted element template.
   */var strictTemplatePolicy=false;/**
   * Setting to enable dom-module lookup from Polymer.Element.  By default,
   * templates must be defined in script using the `static get template()`
   * getter and the `html` tag function.  To enable legacy loading of templates
   * via dom-module, set this flag to true.
   */var allowTemplateFromDomModule=false;/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // unique global id for deduping mixins.
var dedupeId=0;/* eslint-disable valid-jsdoc */ /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */var dedupingMixin=function dedupingMixin(mixin){var mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap();/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications;}// maintain a unique id for each mixin
var mixinDedupeId=dedupeId++;function dedupingMixin(base){var baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base;}var map=mixinApplications;var extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended);}// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
var mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=true;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet;return extended;}return dedupingMixin;};/* eslint-enable valid-jsdoc */ /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var modules={};var lcModules={};/**
   * Sets a dom-module into the global registry by id.
   *
   * @param {string} id dom-module id
   * @param {DomModule} module dom-module instance
   * @return {void}
   */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module;}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()];}function styleOutsideTemplateCheck(inst){if(inst.querySelector('style')){console.warn('dom-module %s has style outside template',inst.id);}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */var DomModule=/*#__PURE__*/function(_HTMLElement){_inherits(DomModule,_HTMLElement);function DomModule(){_classCallCheck(this,DomModule);return _possibleConstructorReturn(this,_getPrototypeOf(DomModule).apply(this,arguments));}_createClass(DomModule,[{key:"attributeChangedCallback",/* eslint-disable no-unused-vars */ /**
     * @param {string} name Name of attribute.
     * @param {?string} old Old value of attribute.
     * @param {?string} value Current value of attribute.
     * @param {?string} namespace Attribute namespace.
     * @return {void}
     * @override
     */value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register();}}/* eslint-enable no-unused-args */ /**
     * The absolute URL of the original location of this `dom-module`.
     *
     * This value will differ from this element's `ownerDocument` in the
     * following ways:
     * - Takes into account any `assetpath` attribute added during bundling
     *   to indicate the original location relative to the bundled location
     * - Uses the HTMLImports polyfill's `importForElement` API to ensure
     *   the path is relative to the import document's location since
     *   `ownerDocument` is not currently polyfilled
     */},{key:"register",/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */value:function register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==undefined){setModule(id,null);throw new Error("strictTemplatePolicy: dom-module ".concat(id," re-registered"));}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this);}}},{key:"assetpath",get:function get(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
var owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;var url=_resolveUrl(this.getAttribute('assetpath')||'',owner.baseURI);this.__assetpath=pathFromUrl(url);}return this.__assetpath;}}],[{key:"import",/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */value:function _import(id,selector){if(id){var m=findModule(id);if(m&&selector){return m.querySelector(selector);}return m;}return null;}},{key:"observedAttributes",get:function get(){return['id'];}}]);return DomModule;}(_wrapNativeSuper(HTMLElement));DomModule.prototype['modules']=modules;customElements.define('dom-module',DomModule);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var MODULE_STYLE_LINK_SELECTOR='link[rel=import][type~=css]';var INCLUDE_ATTR='include';var SHADY_UNSCOPED_ATTR='shady-unscoped';/**
   * @param {string} moduleId .
   * @return {?DomModule} .
   */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId));}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
var container=importDoc.body?importDoc.body:importDoc;var importCss=resolveCss(container.textContent,importDoc.baseURI);var style=document.createElement('style');style.textContent=importCss;return style;}/**
   * Returns a list of <style> elements in a space-separated list of `dom-module`s.
   *
   * @function
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
   */function stylesFromModules(moduleIds){var modules=moduleIds.trim().split(/\s+/);var styles=[];for(var i=0;i<modules.length;i++){styles.push.apply(styles,_toConsumableArray(stylesFromModule(modules[i])));}return styles;}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){var m=importModule(moduleId);if(!m){console.warn('Could not find style data in module named',moduleId);return[];}if(m._styles===undefined){var styles=[];// module imports: <link rel="import" type="css">
styles.push.apply(styles,_toConsumableArray(_stylesFromModuleImports(m)));// include css from the first template in the module
var _template=/** @type {?HTMLTemplateElement} */m.querySelector('template');if(_template){styles.push.apply(styles,_toConsumableArray(stylesFromTemplate(_template,/** @type {templateWithAssetPath} */m.assetpath)));}m._styles=styles;}return m._styles;}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){var styles=[];// if element is a template, get content from its .content
var e$=template.content.querySelectorAll('style');for(var i=0;i<e$.length;i++){var e=e$[i];// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
var include=e.getAttribute(INCLUDE_ATTR);if(include){styles.push.apply(styles,_toConsumableArray(stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index;})));}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI);}styles.push(e);}template._styles=styles;}return template._styles;}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){var m=importModule(moduleId);return m?_stylesFromModuleImports(m):[];}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){var styles=[];var p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(var i=0;i<p$.length;i++){var _p5=p$[i];if(_p5.import){var importDoc=_p5.import;var unscoped=_p5.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){var _style6=styleForImport(importDoc);_style6.setAttribute(SHADY_UNSCOPED_ATTR,'');importDoc._unscopedStyle=_style6;}else if(!importDoc._style){importDoc._style=styleForImport(importDoc);}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style);}}return styles;}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){var modules=moduleIds.trim().split(/\s+/);var cssText='';for(var i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i]);}return cssText;}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){var m=importModule(moduleId);if(m&&m._cssText===undefined){// module imports: <link rel="import" type="css">
var cssText=_cssFromModuleImports(m);// include css from the first template in the module
var t=/** @type {?HTMLTemplateElement} */m.querySelector('template');if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath);}m._cssText=cssText||null;}if(!m){console.warn('Could not find style data in module named',moduleId);}return m&&m._cssText||'';}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){var cssText='';var e$=stylesFromTemplate(template,baseURI);// if element is a template, get content from its .content
for(var i=0;i<e$.length;i++){var e=e$[i];if(e.parentNode){e.parentNode.removeChild(e);}cssText+=e.textContent;}return cssText;}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){var cssText='';var styles=_stylesFromModuleImports(module);for(var i=0;i<styles.length;i++){cssText+=styles[i].textContent;}return cssText;}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Module with utilities for manipulating structured data path strings.
   *
   * @summary Module with utilities for manipulating structured data path strings.
   */ /**
   * Returns true if the given string is a structured data path (has dots).
   *
   * Example:
   *
   * ```
   * isPath('foo.bar.baz') // true
   * isPath('foo')         // false
   * ```
   *
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */function isPath(path){return path.indexOf('.')>=0;}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){var dotIndex=path.indexOf('.');if(dotIndex===-1){return path;}return path.slice(0,dotIndex);}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return base.indexOf(path+'.')===0;}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return path.indexOf(base+'.')===0;}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length);}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path);}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){var parts=[];for(var i=0;i<path.length;i++){var args=path[i].toString().split('.');for(var j=0;j<args.length;j++){parts.push(args[j]);}}return parts.join('.');}else{return path;}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split('.');}return path.toString().split('.');}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function _get2(root,path,info){var prop=root;var parts=split(path);// Loop over path parts[0..n-1] and dereference
for(var i=0;i<parts.length;i++){if(!prop){return;}var part=parts[i];prop=prop[part];}if(info){info.path=parts.join('.');}return prop;}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function _set(root,path,value){var prop=root;var parts=split(path);var last=parts[parts.length-1];if(parts.length>1){// Loop over path parts[0..n-2] and dereference
for(var i=0;i<parts.length-1;i++){var part=parts[i];prop=prop[part];if(!prop){return;}}// Set value to object at end of path
prop[last]=value;}else{// Simple property set
prop[path]=value;}return parts.join('.');}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var caseMap={};var DASH_TO_CAMEL=/-[a-z]/g;var CAMEL_TO_DASH=/([A-Z])/g;/**
   * @fileoverview Module with utilities for converting between "dash-case" and
   * "camelCase" identifiers.
   */ /**
   * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
   * (e.g. `fooBarBaz`).
   *
   * @param {string} dash Dash-case identifier
   * @return {string} Camel-case representation of the identifier
   */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=dash.indexOf('-')<0?dash:dash.replace(DASH_TO_CAMEL,function(m){return m[1].toUpperCase();}));}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,'-$1').toLowerCase());}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // Microtask implemented using Mutation Observer
var microtaskCurrHandle=0;var microtaskLastHandle=0;var microtaskCallbacks=[];var microtaskNodeContent=0;var microtaskNode=document.createTextNode('');new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:true});function microtaskFlush(){var len=microtaskCallbacks.length;for(var i=0;i<len;i++){var cb=microtaskCallbacks[i];if(cb){try{cb();}catch(e){setTimeout(function(){throw e;});}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len;}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */var timeOut={/**
     * Returns a sub-module with the async interface providing the provided
     * delay.
     *
     * @memberof timeOut
     * @param {number=} delay Time to wait before calling callbacks in ms
     * @return {!AsyncInterface} An async timeout interface
     */after:function after(delay){return{run:function run(fn){return window.setTimeout(fn,delay);},cancel:function cancel(handle){window.clearTimeout(handle);}};},/**
     * Enqueues a function called in the next task.
     *
     * @memberof timeOut
     * @param {!Function} fn Callback to run
     * @param {number=} delay Delay in milliseconds
     * @return {number} Handle used for canceling task
     */run:function run(fn,delay){return window.setTimeout(fn,delay);},/**
     * Cancels a previously enqueued `timeOut` callback.
     *
     * @memberof timeOut
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */cancel:function cancel(handle){window.clearTimeout(handle);}};/**
   * Async interface for enqueuing callbacks that run at microtask timing.
   *
   * Note that microtask timing is achieved via a single `MutationObserver`,
   * and thus callbacks enqueued with this API will all run in a single
   * batch, and not interleaved with other microtasks such as promises.
   * Promises are avoided as an implementation choice for the time being
   * due to Safari bugs that cause Promises to lack microtask guarantees.
   *
   * @namespace
   * @summary Async interface for enqueuing callbacks that run at microtask
   *   timing.
   */var microTask={/**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */run:function run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++;},/**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */cancel:function cancel(handle){var idx=handle-microtaskLastHandle;if(idx>=0){if(!microtaskCallbacks[idx]){throw new Error('invalid async handle: '+handle);}microtaskCallbacks[idx]=null;}}};/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /** @const {!AsyncInterface} */var microtask=microTask;/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */var PropertiesChanged=dedupingMixin(/**
       * @template T
       * @param {function(new:T)} superClass Class to apply mixin to.
       * @return {function(new:T)} superClass with mixin applied.
       */function(superClass){/**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */var PropertiesChanged=/*#__PURE__*/function(_superClass){_inherits(PropertiesChanged,_superClass);_createClass(PropertiesChanged,[{key:"_createPropertyAccessor",//eslint-disable-line no-unused-vars
/**
       * Creates a setter/getter pair for the named property with its own
       * local storage.  The getter returns the value in the local storage,
       * and the setter calls `_setProperty`, which updates the local storage
       * for the property and enqueues a `_propertiesChanged` callback.
       *
       * This method may be called on a prototype or an instance.  Calling
       * this method may overwrite a property value that already exists on
       * the prototype/instance by creating the accessor.
       *
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created; the
       *   protected `_setProperty` function must be used to set the property
       * @return {void}
       * @protected
       * @override
       */value:function _createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty('__dataHasAccessor')){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor);}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=true;this._definePropertyAccessor(property,readOnly);}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */},{key:"_addPropertyToAttributeMap",value:function _addPropertyToAttributeMap(property){if(!this.hasOwnProperty('__dataAttributes')){this.__dataAttributes=Object.assign({},this.__dataAttributes);}if(!this.__dataAttributes[property]){var _attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[_attr]=property;}}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get:function get(){return this._getProperty(property);},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){this._setProperty(property,value);}/* eslint-enable */});}}],[{key:"createProperties",/**
       * Creates property accessors for the given property names.
       * @param {!Object} props Object whose keys are names of accessors.
       * @return {void}
       * @protected
       */value:function createProperties(props){var proto=this.prototype;for(var prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop);}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return property.toLowerCase();}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       */},{key:"typeForProperty",value:function typeForProperty(name){}}]);function PropertiesChanged(){var _this7;_classCallCheck(this,PropertiesChanged);_this7=_possibleConstructorReturn(this,_getPrototypeOf(PropertiesChanged).call(this));_this7.__dataEnabled=false;_this7.__dataReady=false;_this7.__dataInvalid=false;_this7.__data={};_this7.__dataPending=null;_this7.__dataOld=null;_this7.__dataInstanceProps=null;_this7.__serializing=false;_this7._initializeProperties();return _this7;}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */_createClass(PropertiesChanged,[{key:"ready",value:function ready(){this.__dataReady=true;this._flushProperties();}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProperties",value:function _initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(var _p6 in this.__dataHasAccessor){if(this.hasOwnProperty(_p6)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[_p6]=this[_p6];delete this[_p6];}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){Object.assign(this,props);}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties();}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */},{key:"_getProperty",value:function _getProperty(property){return this.__data[property];}/* eslint-disable no-unused-vars */ /**
       * Updates the local storage for a property, records the previous value,
       * and adds it to the set of "pending changes" that will be passed to the
       * `_propertiesChanged` callback.  This method does not enqueue the
       * `_propertiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} ext Not used here; affordance for closure
       * @return {boolean} Returns true if the property changed
       * @protected
       * @override
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,ext){var old=this.__data[property];var changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old;}this.__data[property]=value;this.__dataPending[property]=value;}return changed;}/* eslint-enable */ /**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){var _this8=this;if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=true;microtask.run(function(){if(_this8.__dataInvalid){_this8.__dataInvalid=false;_this8._flushProperties();}});}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=true;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null;}this.ready();}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_flushProperties",value:function _flushProperties(){var props=this.__data;var changedProps=this.__dataPending;var old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old);}}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */},{key:"_shouldPropertiesChange",value:function _shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return Boolean(changedProps);}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
       * Method called to determine whether a property value should be
       * considered as a change and cause the `_propertiesChanged` callback
       * to be enqueued.
       *
       * The default implementation returns `true` if a strict equality
       * check fails. The method always returns false for `NaN`.
       *
       * Override this method to e.g. provide stricter checking for
       * Objects/Arrays when using immutable patterns.
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       *   and enqueue a `_proeprtiesChanged` callback
       * @protected
       * @override
       */},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value));}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value);}if(_get(_getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this)){_get(_getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */},{key:"_attributeToProperty",value:function _attributeToProperty(attribute,value,type){if(!this.__serializing){var map=this.__dataAttributes;var property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property));}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */},{key:"_propertyToAttribute",value:function _propertyToAttribute(property,attribute,value){this.__serializing=true;value=arguments.length<3?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=false;}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */},{key:"_valueToNodeAttribute",value:function _valueToNodeAttribute(node,value,attribute){var str=this._serializeValue(value);if(str===undefined){node.removeAttribute(attribute);}else{node.setAttribute(attribute,str);}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){switch(_typeof(value)){case'boolean':return value?'':undefined;default:return value!=null?value.toString():undefined;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){switch(type){case Boolean:return value!==null;case Number:return Number(value);default:return value;}}}]);return PropertiesChanged;}(superClass);return PropertiesChanged;});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // Save map of native properties; this forms a blacklist or properties
// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
var nativeProperties={};var proto=HTMLElement.prototype;while(proto){var props=Object.getOwnPropertyNames(proto);for(var i=0;i<props.length;i++){nativeProperties[props[i]]=true;}proto=Object.getPrototypeOf(proto);}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){var value=model[property];if(value!==undefined){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value);}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={};}else if(!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto',model))){model.__dataProto=Object.create(model.__dataProto);}model.__dataProto[property]=value;}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate
   *     property accessors for each observed attribute. This must be called before the first
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */var PropertyAccessors=dedupingMixin(function(superClass){/**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     * @private
     */var base=PropertiesChanged(superClass);/**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyAccessors}
     * @extends {base}
     * @unrestricted
     */var PropertyAccessors=/*#__PURE__*/function(_base){_inherits(PropertyAccessors,_base);function PropertyAccessors(){_classCallCheck(this,PropertyAccessors);return _possibleConstructorReturn(this,_getPrototypeOf(PropertyAccessors).apply(this,arguments));}_createClass(PropertyAccessors,[{key:"_initializeProperties",/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       */value:function _initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null;}_get(_getPrototypeOf(PropertyAccessors.prototype),"_initializeProperties",this).call(this);}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){for(var _p7 in props){this._setProperty(_p7,props[_p7]);}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       */},{key:"_ensureAttribute",value:function _ensureAttribute(attribute,value){var el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute);}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property value.
       */},{key:"_serializeValue",value:function _serializeValue(value){/* eslint-disable no-fallthrough */switch(_typeof(value)){case'object':if(_instanceof(value,Date)){return value.toString();}else if(value){try{return JSON.stringify(value);}catch(x){return'';}}default:return _get(_getPrototypeOf(PropertyAccessors.prototype),"_serializeValue",this).call(this,value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){/**
         * @type {*}
         */var outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value);}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value;}break;case Array:try{outValue=JSON.parse(/** @type {string} */value);}catch(x){outValue=null;console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value));}break;case Date:outValue=isNaN(value)?String(value):Number(value);outValue=new Date(outValue);break;default:outValue=_get(_getPrototypeOf(PropertyAccessors.prototype),"_deserializeValue",this).call(this,value,type);break;}return outValue;}/* eslint-enable no-fallthrough */ /**
       * Overrides PropertiesChanged implementation to save existing prototype
       * property value so that it can be reset.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       *
       * When calling on a prototype, any overwritten values are saved in
       * `__dataProto`, and it is up to the subclasser to decide how/when
       * to set those properties back into the accessor.  When calling on an
       * instance, the overwritten value is set via `_setPendingProperty`,
       * and the user should call `_invalidateProperties` or `_flushProperties`
       * for the values to take effect.
       * @protected
       * @return {void}
       */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);_get(_getPrototypeOf(PropertyAccessors.prototype),"_definePropertyAccessor",this).call(this,property,readOnly);}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       */},{key:"_hasAccessor",value:function _hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property];}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       */},{key:"_isPropertyPending",value:function _isPropertyPending(prop){return Boolean(this.__dataPending&&prop in this.__dataPending);}}],[{key:"createPropertiesForAttributes",/**
       * Generates property accessors for all attributes in the standard
       * static `observedAttributes` array.
       *
       * Attribute names are mapped to property names using the `dash-case` to
       * `camelCase` convention
       *
       * @return {void}
       */value:function createPropertiesForAttributes(){var a$=this.observedAttributes;for(var _i2=0;_i2<a$.length;_i2++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[_i2]));}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return camelToDashCase(property);}}]);return PropertyAccessors;}(base);return PropertyAccessors;});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // 1.x backwards-compatible auto-wrapper for template type extensions
// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
var templateExtensions={'dom-if':true,'dom-repeat':true};function wrapTemplateExtension(node){var is=node.getAttribute('is');if(is&&templateExtensions[is]){var t=node;t.removeAttribute('is');node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name);}}return node;}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
var parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(var n=parent.firstChild,_i3=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===_i3++){return n;}}}else{return root;}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node;}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(var j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst);}}}// push configuration references at configure time
function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo;}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;var handler=function handler(e){if(context[methodName]){context[methodName](e,e.detail);}else{console.warn('listener method `'+methodName+'` not defined');}};return handler;}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */var TemplateStamp=dedupingMixin(/**
       * @template T
       * @param {function(new:T)} superClass Class to apply mixin to.
       * @return {function(new:T)} superClass with mixin applied.
       */function(superClass){/**
     * @polymer
     * @mixinClass
     * @implements {Polymer_TemplateStamp}
     */var TemplateStamp=/*#__PURE__*/function(_superClass2){_inherits(TemplateStamp,_superClass2);function TemplateStamp(){_classCallCheck(this,TemplateStamp);return _possibleConstructorReturn(this,_getPrototypeOf(TemplateStamp).apply(this,arguments));}_createClass(TemplateStamp,[{key:"_stampTemplate",/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       */value:function _stampTemplate(template){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template);}var templateInfo=this.constructor._parseTemplate(template);var nodeInfo=templateInfo.nodeInfoList;var content=templateInfo.content||template.content;var dom=/** @type {DocumentFragment} */document.importNode(content,true);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;var nodes=dom.nodeList=new Array(nodeInfo.length);dom.$={};for(var _i4=0,l=nodeInfo.length,info;_i4<l&&(info=nodeInfo[_i4]);_i4++){var node=nodes[_i4]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info);}dom=/** @type {!StampedTemplate} */dom;// eslint-disable-line no-self-assign
return dom;}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */},{key:"_addMethodEventListenerToNode",value:function _addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;var handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler;}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler);}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler);}}],[{key:"_parseTemplate",/**
       * Scans a template to produce template metadata.
       *
       * Template-specific metadata are stored in the object returned, and node-
       * specific metadata are stored in objects in its flattened `nodeInfoList`
       * array.  Only nodes in the template that were parsed as nodes of
       * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
       * contains an `index` (`childNodes` index in parent) and optionally
       * `parent`, which points to node info of its parent (including its index).
       *
       * The template metadata object returned from this method has the following
       * structure (many fields optional):
       *
       * ```js
       *   {
       *     // Flattened list of node metadata (for nodes that generated metadata)
       *     nodeInfoList: [
       *       {
       *         // `id` attribute for any nodes with id's for generating `$` map
       *         id: {string},
       *         // `on-event="handler"` metadata
       *         events: [
       *           {
       *             name: {string},   // event name
       *             value: {string},  // handler method name
       *           }, ...
       *         ],
       *         // Notes when the template contained a `<slot>` for shady DOM
       *         // optimization purposes
       *         hasInsertionPoint: {boolean},
       *         // For nested `<template>`` nodes, nested template metadata
       *         templateInfo: {object}, // nested template metadata
       *         // Metadata to allow efficient retrieval of instanced node
       *         // corresponding to this metadata
       *         parentInfo: {number},   // reference to parent nodeInfo>
       *         parentIndex: {number},  // index in parent's `childNodes` collection
       *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
       *       },
       *       ...
       *     ],
       *     // When true, the template had the `strip-whitespace` attribute
       *     // or was nested in a template with that setting
       *     stripWhitespace: {boolean},
       *     // For nested templates, nested template content is moved into
       *     // a document fragment stored here; this is an optimization to
       *     // avoid the cost of nested template cloning
       *     content: {DocumentFragment}
       *   }
       * ```
       *
       * This method kicks off a recursive treewalk as follows:
       *
       * ```
       *    _parseTemplate <---------------------+
       *      _parseTemplateContent              |
       *        _parseTemplateNode  <------------|--+
       *          _parseTemplateNestedTemplate --+  |
       *          _parseTemplateChildNodes ---------+
       *          _parseTemplateNodeAttributes
       *            _parseTemplateNodeAttribute
       *
       * ```
       *
       * These methods may be overridden to add custom metadata about templates
       * to either `templateInfo` or `nodeInfo`.
       *
       * Note that this method may be destructive to the template, in that
       * e.g. event annotations may be removed after being noted in the
       * template metadata.
       *
       * @param {!HTMLTemplateElement} template Template to parse
       * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
       *   template, for parsing nested templates
       * @return {!TemplateInfo} Parsed template metadata
       */value:function _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){var templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute('strip-whitespace');this._parseTemplateContent(template,templateInfo,{parent:null});}return template._templateInfo;}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo);}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted;var element=/** @type {Element} */node;if(element.localName=='template'&&!element.hasAttribute('preserve-content')){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted;}else if(element.localName==='slot'){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=true;}if(element.firstChild){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted;}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted;}return noted;}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */},{key:"_parseTemplateChildNodes",value:function _parseTemplateChildNodes(root,templateInfo,nodeInfo){if(root.localName==='script'||root.localName==='style'){return;}for(var node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if(node.localName=='template'){node=wrapTemplateExtension(node);}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){var/** Node */n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next;}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue;}}var childInfo={parentIndex:parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(/** @type {!NodeInfo} */childInfo)-1;}// Increment if not removed
if(node.parentNode){parentIndex++;}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){var templateInfo=this._parseTemplate(node,outerTemplateInfo);var content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return true;}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttributes",value:function _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
var noted=false;var attrs=Array.from(node.attributes);for(var _i5=attrs.length-1,a;a=attrs[_i5];_i5--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted;}return noted;}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if(name.slice(0,3)==='on-'){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value:value});return true;}// static id
else if(name==='id'){nodeInfo.id=value;return true;}return false;}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       */},{key:"_contentForTemplate",value:function _contentForTemplate(template){var templateInfo=/** @type {HTMLTemplateElementWithInfo} */template._templateInfo;return templateInfo&&templateInfo.content||template.content;}}]);return TemplateStamp;}(superClass);return TemplateStamp;});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // Monotonically increasing unique ID used for de-duping effects triggered
// from multiple properties in the same turn
var dedupeId$1=0;/**
   * Property effect types; effects are stored on the prototype using these keys
   * @enum {string}
   */var TYPES={COMPUTE:'__computeEffects',REFLECT:'__reflectEffects',NOTIFY:'__notifyEffects',PROPAGATE:'__propagateEffects',OBSERVE:'__observeEffects',READ_ONLY:'__readOnly'};/** @const {RegExp} */var capitalAttributeRegex=/[A-Z]/;/**
   * Ensures that the model has an own-property map of effects for the given type.
   * The model may be a prototype or an instance.
   *
   * Property effects are stored as arrays of effects by property in a map,
   * by named type on the model. e.g.
   *
   *   __computeEffects: {
   *     foo: [ ... ],
   *     bar: [ ... ]
   *   }
   *
   * If the model does not yet have an effect map for the type, one is created
   * and returned.  If it does, but it is not an own property (i.e. the
   * prototype had effects), the the map is deeply cloned and the copy is
   * set on the model and returned, ready for new effects to be added.
   *
   * @param {Object} model Prototype or instance
   * @param {string} type Property effect type
   * @return {Object} The own-property map of effects for the given type
   * @private
   */function ensureOwnEffectMap(model,type){var effects=model[type];if(!effects){effects=model[type]={};}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(var _p8 in effects){var protoFx=effects[_p8];var instFx=effects[_p8]=Array(protoFx.length);for(var _i6=0;_i6<protoFx.length;_i6++){instFx[_i6]=protoFx[_i6];}}}return effects;}// -- effects ----------------------------------------------
/**
   * Runs all effects of a given type for the given set of property changes
   * on an instance.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {Object} props Bag of current property changes
   * @param {Object=} oldProps Bag of previous values for changed properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){var ran=false;var id=dedupeId$1++;for(var prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=true;}}return ran;}return false;}/**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){var ran=false;var rootProperty=hasPaths?root(prop):prop;var fxs=effects[rootProperty];if(fxs){for(var _i7=0,l=fxs.length,fx;_i7<l&&(fx=fxs[_i7]);_i7++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId;}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=true;}}}return ran;}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){var triggerPath=trigger.name;return triggerPath==path||trigger.structured&&isAncestor(triggerPath,path)||trigger.wildcard&&isDescendant(triggerPath,path);}else{return true;}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){var fn=typeof info.method==="string"?inst[info.method]:info.method;var changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp]);}else if(!info.dynamicFn){console.warn('observer method `'+info.method+'` not defined');}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
var fxs=inst[TYPES.NOTIFY];var notified;var id=dedupeId$1++;// Try normal notify effects; if none, fall back to try path notification
for(var prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=true;}else if(hasPaths&&notifyPath(inst,prop,props)){notified=true;}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
var host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties();}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){var rootProperty=root(path);if(rootProperty!==path){var eventName=camelToDashCase(rootProperty)+'-changed';dispatchNotifyEvent(inst,eventName,props[path],path);return true;}return false;}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */function dispatchNotifyEvent(inst,eventName,value,path){var detail={value:value,queueProperty:true};if(path){detail.path=path;}/** @type {!HTMLElement} */inst.dispatchEvent(new CustomEvent(eventName,{detail:detail}));}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){var rootProperty=hasPaths?root(property):property;var path=rootProperty!=property?property:null;var value=path?_get2(inst,path):inst.__data[property];if(path&&value===undefined){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path);}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){var value;var detail=/** @type {Object} */event.detail;var fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value;}else{value=event.currentTarget[fromProp];}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,true,Boolean(fromPath))&&(!detail||!detail.queueProperty)){inst._invalidateProperties();}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){var value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,'attribute',/** @type {Node} */inst);}inst._propertyToAttribute(property,info.attrName,value);}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){var computeEffects=inst[TYPES.COMPUTE];if(computeEffects){var inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null;}}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runComputedEffect(inst,property,props,oldProps,info){var result=runMethodEffect(inst,property,props,oldProps,info);var computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,true);}else{inst[computedProp]=result;}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */function computeLinkedPaths(inst,path,value){var links=inst.__dataLinkedPaths;if(links){var link;for(var a in links){var b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,true,true);}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,true,true);}}}}// -- bindings ----------------------------------------------
/**
   * Adds binding metadata to the current `nodeInfo`, and binding effects
   * for all part dependencies to `templateInfo`.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {NodeInfo} nodeInfo Node metadata for current template node
   * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
   * @param {string} target Target property name
   * @param {!Array<!BindingPart>} parts Array of binding part metadata
   * @param {string=} literal Literal text surrounding binding parts (specified
   *   only for 'property' bindings, since these must be initialized as part
   *   of boot-up)
   * @return {void}
   * @private
   */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];var/** Binding */binding={kind:kind,target:target,parts:parts,literal:literal,isCompound:parts.length!==1};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){var _binding$parts$=binding.parts[0],event=_binding$parts$.event,negate=_binding$parts$.negate;binding.listenerEvent=event||camelToDashCase(target)+'-changed';binding.listenerNegate=negate;}// Add "propagate" property effects to templateInfo
var index=templateInfo.nodeInfoList.length;for(var _i8=0;_i8<binding.parts.length;_i8++){var part=binding.parts[_i8];part.compoundIndex=_i8;addEffectForBindingPart(constructor,templateInfo,binding,part,index);}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if(binding.kind==='attribute'&&binding.target[0]==='-'){console.warn('Cannot set attribute '+binding.target+' because "-" is not a valid attribute starting character');}else{var dependencies=part.dependencies;var info={index:index,binding:binding,part:part,evaluator:constructor};for(var j=0;j<dependencies.length;j++){var trigger=dependencies[j];if(typeof trigger=='string'){trigger=parseArg(trigger);trigger.wildcard=true;}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info:info,trigger:trigger});}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){var node=nodeList[info.index];var binding=info.binding;var part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&binding.kind=='property'&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){var value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,false,true)){inst._enqueueClient(node);}}else{var _value2=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
applyBindingValue(inst,node,binding,part,_value2);}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node);}if(binding.kind=='attribute'){// Attribute binding
inst._valueToNodeAttribute(/** @type {Element} */node,value,binding.target);}else{// Property binding
var prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node);}}}else{inst._setUnmanagedPropertyToNode(node,prop,value);}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){var storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join('');}if(binding.kind!=='attribute'){// Some browsers serialize `undefined` to `"undefined"`
if(binding.target==='textContent'||binding.target==='value'&&(node.localName==='input'||node.localName==='textarea')){value=value==undefined?'':value;}}return value;}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return Boolean(binding.target)&&binding.kind!='attribute'&&binding.kind!='text'&&!binding.isCompound&&binding.parts[0].mode==='{';}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
var nodeList=templateInfo.nodeList,nodeInfoList=templateInfo.nodeInfoList;if(nodeInfoList.length){for(var _i9=0;_i9<nodeInfoList.length;_i9++){var info=nodeInfoList[_i9];var node=nodeList[_i9];var bindings=info.bindings;if(bindings){for(var _i10=0;_i10<bindings.length;_i10++){var binding=bindings[_i10];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding);}}node.__dataHost=inst;}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
var storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={});var parts=binding.parts;// Copy literals from parts into storage for this binding
var literals=new Array(parts.length);for(var j=0;j<parts.length;j++){literals[j]=parts[j].literal;}var target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&binding.kind=='property'){node[target]=binding.literal;}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){var part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate);});}}// -- for method-based effects (complexObserver & computed) --------------
/**
   * Adds property effects for each argument in the method signature (and
   * optionally, for the method name if `dynamic` is true) that calls the
   * provided effect function.
   *
   * @param {Element | Object} model Prototype or instance
   * @param {!MethodSignature} sig Method signature metadata
   * @param {string} type Type of property effect to add
   * @param {Function} effectFn Function to run when arguments change
   * @param {*=} methodInfo Effect-specific information to be included in
   *   method effect metadata
   * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
   *   method names should be included as a dependency to the effect. Note,
   *   defaults to true if the signature is static (sig.static is true).
   * @return {void}
   * @private
   */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&(_typeof(dynamicFn)!=='object'||dynamicFn[sig.methodName]);var info={methodName:sig.methodName,args:sig.args,methodInfo:methodInfo,dynamicFn:dynamicFn};for(var _i11=0,arg;_i11<sig.args.length&&(arg=sig.args[_i11]);_i11++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg});}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info});}}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
var context=inst._methodHost||inst;var fn=context[info.methodName];if(fn){var args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args);}else if(!info.dynamicFn){console.warn('method `'+info.methodName+'` not defined');}}var emptyArray=[];// Regular expressions used for binding
var IDENT='(?:'+'[a-zA-Z_$][\\w.:$\\-*]*'+')';var NUMBER='(?:'+'[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?'+')';var SQUOTE_STRING='(?:'+'\'(?:[^\'\\\\]|\\\\.)*\''+')';var DQUOTE_STRING='(?:'+'"(?:[^"\\\\]|\\\\.)*"'+')';var STRING='(?:'+SQUOTE_STRING+'|'+DQUOTE_STRING+')';var ARGUMENT='(?:('+IDENT+'|'+NUMBER+'|'+STRING+')\\s*'+')';var ARGUMENTS='(?:'+ARGUMENT+'(?:,\\s*'+ARGUMENT+')*'+')';var ARGUMENT_LIST='(?:'+'\\(\\s*'+'(?:'+ARGUMENTS+'?'+')'+'\\)\\s*'+')';var BINDING='('+IDENT+'\\s*'+ARGUMENT_LIST+'?'+')';// Group 3
var OPEN_BRACKET='(\\[\\[|{{)'+'\\s*';var CLOSE_BRACKET='(?:]]|}})';var NEGATE='(?:(!)\\s*)?';// Group 2
var EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET;var bindingRegex=new RegExp(EXPRESSION,"g");/**
   * Create a string from binding parts of all the literal parts
   *
   * @param {!Array<BindingPart>} parts All parts to stringify
   * @return {string} String made from the literal parts
   */function literalFromParts(parts){var s='';for(var _i12=0;_i12<parts.length;_i12++){var literal=parts[_i12].literal;s+=literal||'';}return s;}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
var m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){var methodName=m[1];var sig={methodName:methodName,static:true,args:emptyArray};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
var args=m[2].replace(/\\,/g,'&comma;').split(',');return parseArgs(args,sig);}else{return sig;}}return null;}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){var arg=parseArg(rawArg);if(!arg.literal){sig.static=false;}return arg;},this);return sig;}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
var arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,',')// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,'\$1');// basic argument descriptor
var a={name:arg,value:'',literal:false};// detect literal value (must be String or Number)
var fc=arg[0];if(fc==='-'){fc=arg[1];}if(fc>='0'&&fc<='9'){fc='#';}switch(fc){case"'":case'"':a.value=arg.slice(1,-1);a.literal=true;break;case'#':a.value=Number(arg);a.literal=true;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=root(arg);// detect structured path (has dots)
a.structured=isPath(arg);if(a.structured){a.wildcard=arg.slice(-2)=='.*';if(a.wildcard){a.name=arg.slice(0,-2);}}}return a;}// data api
/**
   * Sends array splice notifications (`.splices` and `.length`)
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {Array} splices Array of splice records
   * @return {void}
   * @private
   */function _notifySplices(inst,array,path,splices){var splicesPath=path+'.splices';inst.notifyPath(splicesPath,{indexSplices:splices});inst.notifyPath(path+'.length',array.length);// Null here to allow potentially large splice records to be GC'ed.
inst.__data[splicesPath]={indexSplices:null};}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){_notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:'splice'}]);}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1);}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */var PropertyEffects=dedupingMixin(function(superClass){/**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertyAccessors}
     * @implements {Polymer_TemplateStamp}
     * @unrestricted
     * @private
     */var propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));/**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyEffects}
     * @extends {propertyEffectsBase}
     * @unrestricted
     */var PropertyEffects=/*#__PURE__*/function(_propertyEffectsBase){_inherits(PropertyEffects,_propertyEffectsBase);function PropertyEffects(){var _this9;_classCallCheck(this,PropertyEffects);_this9=_possibleConstructorReturn(this,_getPrototypeOf(PropertyEffects).call(this));/** @type {boolean} */ // Used to identify users of this mixin, ala instanceof
_this9.__isPropertyEffectsClient=true;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
// path changes dirty check against `__dataTemp` only during one "turn"
// and are cleared when `__dataCounter` returns to 0.
_this9.__dataCounter=0;/** @type {boolean} */_this9.__dataClientsReady;/** @type {Array} */_this9.__dataPendingClients;/** @type {Object} */_this9.__dataToNotify;/** @type {Object} */_this9.__dataLinkedPaths;/** @type {boolean} */_this9.__dataHasPaths;/** @type {Object} */_this9.__dataCompoundStorage;/** @type {Polymer_PropertyEffects} */_this9.__dataHost;/** @type {!Object} */_this9.__dataTemp;/** @type {boolean} */_this9.__dataClientsInitialized;/** @type {!Object} */_this9.__data;/** @type {!Object} */_this9.__dataPending;/** @type {!Object} */_this9.__dataOld;/** @type {Object} */_this9.__computeEffects;/** @type {Object} */_this9.__reflectEffects;/** @type {Object} */_this9.__notifyEffects;/** @type {Object} */_this9.__propagateEffects;/** @type {Object} */_this9.__observeEffects;/** @type {Object} */_this9.__readOnly;/** @type {!TemplateInfo} */_this9.__templateInfo;return _this9;}_createClass(PropertyEffects,[{key:"_initializeProperties",/**
       * @return {void}
       */value:function _initializeProperties(){_get(_getPrototypeOf(PropertyEffects.prototype),"_initializeProperties",this).call(this);hostStack.registerHost(this);this.__dataClientsReady=false;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=false;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=false;}/**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={};}/**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){var readOnly=this[TYPES.READ_ONLY];for(var prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop];}}}// Prototype setup ----------------------------------------
/**
       * Equivalent to static `addPropertyEffect` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */},{key:"_addPropertyEffect",value:function _addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
var effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[];}effects.push(effect);}/**
       * Removes the given property effect.
       *
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */},{key:"_removePropertyEffect",value:function _removePropertyEffect(property,type,effect){var effects=ensureOwnEffectMap(this,type)[property];var idx=effects.indexOf(effect);if(idx>=0){effects.splice(idx,1);}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasPropertyEffect",value:function _hasPropertyEffect(property,type){var effects=this[type];return Boolean(effects&&effects[property]);}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReadOnlyEffect",value:function _hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY);}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasNotifyEffect",value:function _hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY);}/**
       * Returns whether the current prototype/instance has a "reflect to attribute"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReflectEffect",value:function _hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT);}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasComputedEffect",value:function _hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE);}// Runtime ----------------------------------------
/**
       * Sets a pending property or path.  If the root property of the path in
       * question had no accessor, the path is set, otherwise it is enqueued
       * via `_setPendingProperty`.
       *
       * This function isolates relatively expensive functionality necessary
       * for the public API (`set`, `setProperties`, `notifyPath`, and property
       * change listeners via {{...}} bindings), such that it is only done
       * when paths enter the system, and not at every propagation step.  It
       * also sets a `__dataHasPaths` flag on the instance which is used to
       * fast-path slower path-matching code in the property effects host paths.
       *
       * `path` can be a path string or array of path parts as accepted by the
       * public API.
       *
       * @param {string | !Array<number|string>} path Path to set
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify Set to true if this change should
       *  cause a property notification event dispatch
       * @param {boolean=} isPathNotification If the path being set is a path
       *   notification of an already changed value, as opposed to a request
       *   to set and notify the change.  In the latter `false` case, a dirty
       *   check is performed and then the value is set to the path before
       *   enqueuing the pending property change.
       * @return {boolean} Returns true if the property/path was enqueued in
       *   the pending changes bag.
       * @protected
       */},{key:"_setPendingPropertyOrPath",value:function _setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){var old=_get2(this,path);path=/** @type {string} */_set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!_get(_getPrototypeOf(PropertyEffects.prototype),"_shouldPropertyChange",this).call(this,path,value,old)){return false;}}this.__dataHasPaths=true;if(this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)){computeLinkedPaths(this,path,value);return true;}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(/**@type{string}*/path,value,shouldNotify);}else{this[path]=value;}}return false;}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||_typeof(value)=='object'){node[prop]=value;}}/**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,shouldNotify){var propIsPath=this.__dataHasPaths&&isPath(property);var prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property];}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(propIsPath){this.__dataTemp[property]=value;}else{this.__data[property]=value;}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify;}return true;}return false;}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value,true)){this._invalidateProperties();}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){if(this.__dataReady){this._flushProperties();}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */},{key:"_enqueueClient",value:function _enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client);}}/**
       * Overrides superclass implementation.
       *
       * @return {void}
       * @protected
       */},{key:"_flushProperties",value:function _flushProperties(){this.__dataCounter++;_get(_getPrototypeOf(PropertyEffects.prototype),"_flushProperties",this).call(this);this.__dataCounter--;}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @return {void}
       * @protected
       */},{key:"_flushClients",value:function _flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=true;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=true;}else{this.__enableOrFlushClients();}}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
},{key:"__enableOrFlushClients",value:function __enableOrFlushClients(){var clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(var _i13=0;_i13<clients.length;_i13++){var client=clients[_i13];if(!client.__dataEnabled){client._enableProperties();}else if(client.__dataPending){client._flushProperties();}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @return {void}
       * @protected
       */},{key:"_readyClients",value:function _readyClients(){this.__enableOrFlushClients();}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */},{key:"setProperties",value:function setProperties(props,setReadOnly){for(var path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(path,props[path],true);}}this._invalidateProperties();}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */},{key:"ready",value:function ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsReady){this._flushClients();}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties();}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
var hasPaths=this.__dataHasPaths;this.__dataHasPaths=false;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
var notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths);}// Clear temporary cache at end of turn
if(this.__dataCounter==1){this.__dataTemp={};}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */},{key:"_propagatePropertyChanges",value:function _propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths);}var templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo;}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */},{key:"linkPaths",value:function linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from;}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */},{key:"unlinkPaths",value:function unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path];}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       * @return {void}
       * @public
      */},{key:"notifySplices",value:function notifySplices(path,splices){var info={path:''};var array=/** @type {Array} */_get2(this,path,info);_notifySplices(this,array,info.path,splices);}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */},{key:"get",value:function get(path,root$$1){return _get2(root$$1||this,path);}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
      */},{key:"set",value:function set(path,value,root$$1){if(root$$1){_set(root$$1,path,value);}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,true)){this._invalidateProperties();}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */},{key:"push",value:function push(path){var info={path:''};var array=/** @type {Array}*/_get2(this,path,info);var len=array.length;for(var _len=arguments.length,items=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){items[_key-1]=arguments[_key];}var ret=array.push.apply(array,items);if(items.length){notifySplice(this,array,info.path,len,items.length,[]);}return ret;}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"pop",value:function pop(path){var info={path:''};var array=/** @type {Array} */_get2(this,path,info);var hadLength=Boolean(array.length);var ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret]);}return ret;}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {Array} Array of removed items.
       * @public
       */},{key:"splice",value:function splice(path,start,deleteCount){for(var _len2=arguments.length,items=new Array(_len2>3?_len2-3:0),_key2=3;_key2<_len2;_key2++){items[_key2-3]=arguments[_key2];}var info={path:''};var array=/** @type {Array} */_get2(this,path,info);// Normalize fancy native splice handling of crazy start values
if(start<0){start=array.length-Math.floor(-start);}else if(start){start=Math.floor(start);}// array.splice does different things based on the number of arguments
// you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
// do different things. In the former, the whole array is cleared. In the
// latter, no items are removed.
// This means that we need to detect whether 1. one of the arguments
// is actually passed in and then 2. determine how many arguments
// we should pass on to the native array.splice
//
var ret;// Omit any additional arguments if they were not passed in
if(arguments.length===2){ret=array.splice(start);// Either start was undefined and the others were defined, but in this
// case we can safely pass on all arguments
//
// Note: this includes the case where none of the arguments were passed in,
// e.g. this.splice('array'). However, if both start and deleteCount
// are undefined, array.splice will not modify the array (as expected)
}else{ret=array.splice.apply(array,[start,deleteCount].concat(items));}// At the end, check whether any items were passed in (e.g. insertions)
// or if the return array contains items (e.g. deletions).
// Only notify if items were added or deleted.
if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret);}return ret;}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"shift",value:function shift(path){var info={path:''};var array=/** @type {Array} */_get2(this,path,info);var hadLength=Boolean(array.length);var ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret]);}return ret;}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */},{key:"unshift",value:function unshift(path){var info={path:''};var array=/** @type {Array} */_get2(this,path,info);for(var _len3=arguments.length,items=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){items[_key3-1]=arguments[_key3];}var ret=array.unshift.apply(array,items);if(items.length){notifySplice(this,array,info.path,0,items.length,[]);}return ret;}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
      */},{key:"notifyPath",value:function notifyPath(path,value){/** @type {string} */var propPath;if(arguments.length==1){// Get value if not supplied
var info={path:''};value=_get2(this,path,info);propPath=info.path;}else if(Array.isArray(path)){// Normalize path if needed
propPath=normalize(path);}else{propPath=/** @type{string} */path;}if(this._setPendingPropertyOrPath(propPath,value,true,true)){this._invalidateProperties();}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"_createReadOnlyProperty",value:function _createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this['_set'+upper(property)]=/** @this {PropertyEffects} */function(value){this._setProperty(property,value);};}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createPropertyObserver",value:function _createPropertyObserver(property,method,dynamicFn){var info={property:property,method:method,dynamicFn:Boolean(dynamicFn)};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(/** @type {string} */method,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:method}});}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createMethodObserver",value:function _createMethodObserver(expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn);}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createNotifyingProperty",value:function _createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+'-changed',property:property}});}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createReflectedProperty",value:function _createReflectedProperty(property){var attr=this.constructor.attributeNameForProperty(property);if(attr[0]==='-'){console.warn('Property '+property+' cannot be reflected to attribute '+attr+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}});}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createComputedProperty",value:function _createComputedProperty(property,expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn);}/**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {Array<*>} Array of argument values
       * @private
       */},{key:"_marshalArgs",value:function _marshalArgs(args,path,props){var data=this.__data;var values=[];for(var _i14=0,l=args.length;_i14<l;_i14++){var arg=args[_i14];var name=arg.name;var v=void 0;if(arg.literal){v=arg.value;}else{if(arg.structured){v=_get2(data,name);// when data is not stored e.g. `splices`
if(v===undefined){v=props[name];}}else{v=data[name];}}if(arg.wildcard){// Only send the actual path changed info if the change that
// caused the observer to run matched the wildcard
var baseChanged=name.indexOf(path+'.')===0;var matches$$1=path.indexOf(name)===0&&!baseChanged;values[_i14]={path:matches$$1?path:name,value:matches$$1?props[path]:v,base:v};}else{values[_i14]=v;}}return values;}// -- static class methods ------------
/**
       * Ensures an accessor exists for the specified property, and adds
       * to a list of "property effects" that will run when the accessor for
       * the specified property is set.  Effects are grouped by "type", which
       * roughly corresponds to a phase in effect processing.  The effect
       * metadata should be in the following form:
       *
       *     {
       *       fn: effectFunction, // Reference to function to call to perform effect
       *       info: { ... }       // Effect metadata passed to function
       *       trigger: {          // Optional triggering metadata; if not provided
       *         name: string      // the property is treated as a wildcard
       *         structured: boolean
       *         wildcard: boolean
       *       }
       *     }
       *
       * Effects are called from `_propertiesChanged` in the following order by
       * type:
       *
       * 1. COMPUTE
       * 2. PROPAGATE
       * 3. REFLECT
       * 4. OBSERVE
       * 5. NOTIFY
       *
       * Effect functions are called with the following signature:
       *
       *     effectFunction(inst, path, props, oldProps, info, hasPaths)
       *
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */},{key:"_bindTemplate",// -- binding ----------------------------------------------
/**
       * Equivalent to static `bindTemplate` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * This method may be called on the prototype (for prototypical template
       * binding, to avoid creating accessors every instance) once per prototype,
       * and will be called with `runtimeBinding: true` by `_stampTemplate` to
       * create and link an instance of the template metadata associated with a
       * particular stamping.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @param {boolean=} instanceBinding When false (default), performs
       *   "prototypical" binding of the template and overwrites any previously
       *   bound template for the class. When true (as passed from
       *   `_stampTemplate`), the template info is instanced and linked into
       *   the list of bound templates.
       * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
       *   this is an instance of the prototypical template info
       * @protected
       */value:function _bindTemplate(template,instanceBinding){var templateInfo=this.constructor._parseTemplate(template);var wasPreBound=this.__templateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(var prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop);}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into list of templates if necessary
templateInfo=/** @type {!TemplateInfo} */Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){var last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo;}}return this.__templateInfo=templateInfo;}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */},{key:"_stampTemplate",/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */value:function _stampTemplate(template){// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.beginHosting(this);var dom=_get(_getPrototypeOf(PropertyEffects.prototype),"_stampTemplate",this).call(this,template);hostStack.endHosting(this);var templateInfo=/** @type {!TemplateInfo} */this._bindTemplate(template,true);// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){var nodes=templateInfo.childNodes=[];for(var n=dom.firstChild;n;n=n.nextSibling){nodes.push(n);}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes if already booted
if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,false,templateInfo.nodeList);}return dom;}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */},{key:"_removeBoundDom",value:function _removeBoundDom(dom){// Unlink template info
var templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo;}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo;}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo;}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;// Remove stamped nodes
var nodes=templateInfo.childNodes;for(var _i15=0;_i15<nodes.length;_i15++){var node=nodes[_i15];node.parentNode.removeChild(node);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"PROPERTY_EFFECT_TYPES",get:function get(){return TYPES;}}],[{key:"addPropertyEffect",value:function addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect);}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"createPropertyObserver",value:function createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn);}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */},{key:"createMethodObserver",value:function createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn);}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"createNotifyingProperty",value:function createNotifyingProperty(property){this.prototype._createNotifyingProperty(property);}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"createReadOnlyProperty",value:function createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter);}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"createReflectedProperty",value:function createReflectedProperty(property){this.prototype._createReflectedProperty(property);}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"createComputedProperty",value:function createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn);}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       */},{key:"bindTemplate",value:function bindTemplate(template){return this.prototype._bindTemplate(template);}},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){var hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=true;var effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{};var propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect);}},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted=_get(_getPrototypeOf(PropertyEffects),"_parseTemplateNode",this).call(this,node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){var parts=this._parseBindings(node.textContent,templateInfo);if(parts){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(parts)||' ';addBinding(this,templateInfo,nodeInfo,'text','textContent',parts);noted=true;}}return noted;}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){var parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
var origName=name;var kind='property';// The only way we see a capital letter here is if the attr has
// a capital letter in it per spec. In this case, to make sure
// this binding works, we go ahead and make the binding to the attribute.
if(capitalAttributeRegex.test(name)){kind='attribute';}else if(name[name.length-1]=='$'){name=name.slice(0,-1);kind='attribute';}// Initialize attribute bindings with any literal parts
var literal=literalFromParts(parts);if(literal&&kind=='attribute'){node.setAttribute(name,literal);}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if(node.localName==='input'&&origName==='value'){node.setAttribute(origName,'');}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if(kind==='property'){name=dashToCamelCase(name);}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return true;}else{return _get(_getPrototypeOf(PropertyEffects),"_parseTemplateNodeAttribute",this).call(this,node,templateInfo,nodeInfo,name,value);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){var noted=_get(_getPrototypeOf(PropertyEffects),"_parseTemplateNestedTemplate",this).call(this,node,templateInfo,nodeInfo);// Merge host props into outer template and add bindings
var hostProps=nodeInfo.templateInfo.hostProps;var mode='{';for(var source in hostProps){var parts=[{mode:mode,source:source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,'property','_host_'+source,parts);}return noted;}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       */},{key:"_parseBindings",value:function _parseBindings(text,templateInfo){var parts=[];var lastIndex=0;var m;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while((m=bindingRegex.exec(text))!==null){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)});}// Add binding part
var mode=m[1][0];var negate=Boolean(m[2]);var source=m[3].trim();var customEvent=false,notifyEvent='',colon=-1;if(mode=='{'&&(colon=source.indexOf('::'))>0){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=true;}var signature=parseMethod(source);var dependencies=[];if(signature){// Inline computed function
var args=signature.args,methodName=signature.methodName;for(var _i16=0;_i16<args.length;_i16++){var arg=args[_i16];if(!arg.literal){dependencies.push(arg);}}var dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=true;}}else{// Property or path
dependencies.push(source);}parts.push({source:source,mode:mode,negate:negate,customEvent:customEvent,signature:signature,dependencies:dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex;}// Add a final literal part
if(lastIndex&&lastIndex<text.length){var literal=text.substring(lastIndex);if(literal){parts.push({literal:literal});}}if(parts.length){return parts;}else{return null;}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {this} inst Element that should be used as scope for
       *   binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       */},{key:"_evaluateBinding",value:function _evaluateBinding(inst,part,path,props,oldProps,hasPaths){var value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature);}else if(path!=part.source){value=_get2(inst,part.source);}else{if(hasPaths&&isPath(path)){value=_get2(inst,path);}else{value=inst.__data[path];}}if(part.negate){value=!value;}return value;}}]);return PropertyEffects;}(propertyEffectsBase);return PropertyEffects;});/**
   * Helper api for enqueuing client dom created by a host element.
   *
   * By default elements are flushed via `_flushProperties` when
   * `connectedCallback` is called. Elements attach their client dom to
   * themselves at `ready` time which results from this first flush.
   * This provides an ordering guarantee that the client dom an element
   * creates is flushed before the element itself (i.e. client `ready`
   * fires before host `ready`).
   *
   * However, if `_flushProperties` is called *before* an element is connected,
   * as for example `Templatize` does, this ordering guarantee cannot be
   * satisfied because no elements are connected. (Note: Bound elements that
   * receive data do become enqueued clients and are properly ordered but
   * unbound elements are not.)
   *
   * To maintain the desired "client before host" ordering guarantee for this
   * case we rely on the "host stack. Client nodes registers themselves with
   * the creating host element when created. This ensures that all client dom
   * is readied in the proper order, maintaining the desired guarantee.
   *
   * @private
   */var HostStack=/*#__PURE__*/function(){function HostStack(){_classCallCheck(this,HostStack);this.stack=[];}/**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     */_createClass(HostStack,[{key:"registerHost",value:function registerHost(inst){if(this.stack.length){var host=this.stack[this.stack.length-1];host._enqueueClient(inst);}}/**
     * @param {*} inst Instance to begin hosting
     * @return {void}
     */},{key:"beginHosting",value:function beginHosting(inst){this.stack.push(inst);}/**
     * @param {*} inst Instance to end hosting
     * @return {void}
     */},{key:"endHosting",value:function endHosting(inst){var stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop();}}}]);return HostStack;}();var hostStack=new HostStack();/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Creates a copy of `props` with each property normalized such that
   * upgraded it is an object with at least a type property { type: Type}.
   *
   * @param {Object} props Properties to normalize
   * @return {Object} Copy of input `props` with normalized properties that
   * are in the form {type: Type}
   * @private
   */function normalizeProperties(props){var output={};for(var _p9 in props){var o=props[_p9];output[_p9]=typeof o==='function'?{type:o}:o;}return output;}/**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */var PropertiesMixin=dedupingMixin(function(superClass){/**
    * @constructor
    * @implements {Polymer_PropertiesChanged}
    * @private
    */var base=PropertiesChanged(superClass);/**
    * Returns the super class constructor for the given class, if it is an
    * instance of the PropertiesMixin.
    *
    * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
    * @return {?PropertiesMixinConstructor} Super class constructor
    */function superPropertiesClass(constructor){var superCtor=Object.getPrototypeOf(constructor);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return _instanceof(superCtor.prototype,PropertiesMixin)?/** @type {!PropertiesMixinConstructor} */superCtor:null;}/**
    * Returns a memoized version of the `properties` object for the
    * given class. Properties not in object format are converted to at
    * least {type}.
    *
    * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
    * @return {Object} Memoized properties object
    */function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties',constructor))){var _props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty('properties',constructor))){var properties=constructor.properties;if(properties){_props=normalizeProperties(properties);}}constructor.__ownProperties=_props;}return constructor.__ownProperties;}/**
    * @polymer
    * @mixinClass
    * @extends {base}
    * @implements {Polymer_PropertiesMixin}
    * @unrestricted
    */var PropertiesMixin=/*#__PURE__*/function(_base2){_inherits(PropertiesMixin,_base2);function PropertiesMixin(){_classCallCheck(this,PropertiesMixin);return _possibleConstructorReturn(this,_getPrototypeOf(PropertiesMixin).apply(this,arguments));}_createClass(PropertiesMixin,[{key:"_initializeProperties",/**
      * Overrides `PropertiesChanged` method and adds a call to
      * `finalize` which lazily configures the element's property accessors.
      * @override
      * @return {void}
      */value:function _initializeProperties(){this.constructor.finalize();_get(_getPrototypeOf(PropertiesMixin.prototype),"_initializeProperties",this).call(this);}/**
      * Called when the element is added to a document.
      * Calls `_enableProperties` to turn on property system from
      * `PropertiesChanged`.
      * @suppress {missingProperties} Super may or may not implement the callback
      * @return {void}
      * @override
      */},{key:"connectedCallback",value:function connectedCallback(){if(_get(_getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this)){_get(_getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this).call(this);}this._enableProperties();}/**
      * Called when the element is removed from a document
      * @suppress {missingProperties} Super may or may not implement the callback
      * @return {void}
      * @override
      */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(_get(_getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this)){_get(_getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this).call(this);}}}],[{key:"finalize",/**
      * Finalizes an element definition, including ensuring any super classes
      * are also finalized. This includes ensuring property
      * accessors exist on the element prototype. This method calls
      * `_finalizeClass` to finalize each constructor in the prototype chain.
      * @return {void}
      */value:function finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__finalized',this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);if(superCtor){superCtor.finalize();}this.__finalized=true;this._finalizeClass();}}/**
      * Finalize an element class. This includes ensuring property
      * accessors exist on the element prototype. This method is called by
      * `finalize` and finalizes the class constructor.
      *
      * @protected
      */},{key:"_finalizeClass",value:function _finalizeClass(){var props=ownProperties(/** @type {!PropertiesMixinConstructor} */this);if(props){this.createProperties(props);}}/**
      * Returns a memoized version of all properties, including those inherited
      * from super classes. Properties not in object format are converted to
      * at least {type}.
      *
      * @return {Object} Object containing properties for this class
      * @protected
      */},{key:"typeForProperty",/**
      * Overrides `PropertiesChanged` method to return type specified in the
      * static `properties` object for the given property.
      * @param {string} name Name of property
      * @return {*} Type to which to deserialize attribute
      *
      * @protected
      */value:function typeForProperty(name){var info=this._properties[name];return info&&info.type;}},{key:"observedAttributes",/**
      * Implements standard custom elements getter to observes the attributes
      * listed in `properties`.
      * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
      */get:function get(){var _this10=this;var props=this._properties;return props?Object.keys(props).map(function(p){return _this10.attributeNameForProperty(p);}):[];}},{key:"_properties",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__properties',this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(/** @type {PropertiesMixinConstructor} */this));}return this.__properties;}}]);return PropertiesMixin;}(base);return PropertiesMixin;});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Current Polymer version in Semver notation.
   * @type {string} Semver notation of the current version of Polymer.
   */var version='3.0.5';/**
   * Element class mixin that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * Subclassers may provide the following static getters to return metadata
   * used to configure Polymer's features for the class:
   *
   * - `static get is()`: When the template is provided via a `dom-module`,
   *   users should return the `dom-module` id from a static `is` getter.  If
   *   no template is needed or the template is provided directly via the
   *   `template` getter, there is no need to define `is` for the element.
   *
   * - `static get template()`: Users may provide the template directly (as
   *   opposed to via `dom-module`) by implementing a static `template` getter.
   *   The getter must return an `HTMLTemplateElement`.
   *
   * - `static get properties()`: Should return an object describing
   *   property-related metadata used by Polymer features (key: property name
   *   value: object containing property metadata). Valid keys in per-property
   *   metadata include:
   *   - `type` (String|Number|Object|Array|...): Used by
   *     `attributeChangedCallback` to determine how string-based attributes
   *     are deserialized to JavaScript property values.
   *   - `notify` (boolean): Causes a change in the property to fire a
   *     non-bubbling event called `<property>-changed`. Elements that have
   *     enabled two-way binding to the property use this event to observe changes.
   *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *     To set a read-only property, use the private setter method
   *     `_setProperty(property, value)`.
   *   - `observer` (string): Observer method name that will be called when
   *     the property changes. The arguments of the method are
   *     `(value, previousValue)`.
   *   - `computed` (string): String describing method and dependent properties
   *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *     Computed properties are read-only by default and can only be changed
   *     via the return value of the computing method.
   *
   * - `static get observers()`: Array of strings describing multi-property
   *   observer methods and their dependent properties (e.g.
   *   `'observeABC(a, b, c)'`).
   *
   * The base class provides default implementations for the following standard
   * custom element lifecycle callbacks; users may override these, but should
   * call the super method to ensure
   * - `constructor`: Run when the element is created or upgraded
   * - `connectedCallback`: Run each time the element is connected to the
   *   document
   * - `disconnectedCallback`: Run each time the element is disconnected from
   *   the document
   * - `attributeChangedCallback`: Run each time an attribute in
   *   `observedAttributes` is set or removed (note: this element's default
   *   `observedAttributes` implementation will automatically return an array
   *   of dash-cased attributes based on `properties`)
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyEffects
   * @appliesMixin PropertiesMixin
   * @property rootPath {string} Set to the value of `rootPath`,
   *   which defaults to the main document path
   * @property importPath {string} Set to the value of the class's static
   *   `importPath` property, which defaults to the path of this element's
   *   `dom-module` (when `is` is used), but can be overridden for other
   *   import strategies.
   * @summary Element class mixin that provides the core API for Polymer's
   * meta-programming features.
   */var ElementMixin=dedupingMixin(function(base){/**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyEffects}
     * @implements {Polymer_PropertiesMixin}
     * @private
     */var polymerElementBase=PropertiesMixin(PropertyEffects(base));/**
     * Returns a list of properties with default values.
     * This list is created as an optimization since it is a subset of
     * the list returned from `_properties`.
     * This list is used in `_initializeProperties` to set property defaults.
     *
     * @param {PolymerElementConstructor} constructor Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     *   that have default values
     * @private
     */function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults',constructor))){constructor.__propertyDefaults=null;var _props2=constructor._properties;for(var _p10 in _props2){var info=_props2[_p10];if('value'in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[_p10]=info;}}}return constructor.__propertyDefaults;}/**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownObservers',constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty('observers',constructor))?/** @type {PolymerElementConstructor} */constructor.observers:null;}return constructor.__ownObservers;}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=true;}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed&&!proto._hasReadOnlyEffect(name)){proto._createComputedProperty(name,info.computed,allProps);}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed);}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name);}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name);}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer]);}// always create the mapping from attribute back to property for deserialization.
proto._addPropertyToAttributeMap(name);}/**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */function processElementStyles(klass,template,is,baseURI){var templateStyles=template.content.querySelectorAll('style');var stylesWithImports=stylesFromTemplate(template);// insert styles from <link rel="import" type="css"> at the top of the template
var linkedStyles=stylesFromModuleImports(is);var firstTemplateChild=template.content.firstElementChild;for(var idx=0;idx<linkedStyles.length;idx++){var s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild);}// keep track of the last "concrete" style in the template we have encountered
var templateStyleIndex=0;// ensure all gathered styles are actually in this template.
for(var _i17=0;_i17<stylesWithImports.length;_i17++){var _s=stylesWithImports[_i17];var templateStyle=templateStyles[templateStyleIndex];// if the style is not in this template, it's been "included" and
// we put a clone of it in the template before the style that included it
if(templateStyle!==_s){_s=_s.cloneNode(true);templateStyle.parentNode.insertBefore(_s,templateStyle);}else{templateStyleIndex++;}_s.textContent=klass._processStyleText(_s.textContent,baseURI);}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is);}}/**
     * Look up template from dom-module for element
     *
     * @param {!string} is Element name to look up
     * @return {!HTMLTemplateElement} Template found in dom module, or
     *   undefined if not found
     * @protected
     */function getTemplateFromDomModule(is){var template=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=DomModule.import(is,'template');// Under strictTemplatePolicy, require any element with an `is`
// specified to have a dom-module
if(strictTemplatePolicy&&!template){throw new Error("strictTemplatePolicy: expecting dom-module or null template for ".concat(is));}}return template;}/**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */var PolymerElement=/*#__PURE__*/function(_polymerElementBase){_inherits(PolymerElement,_polymerElementBase);_createClass(PolymerElement,null,[{key:"_finalizeClass",/**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */value:function _finalizeClass(){_get(_getPrototypeOf(PolymerElement),"_finalizeClass",this).call(this);if(this.hasOwnProperty(JSCompiler_renameProperty('is',this))&&this.is){register(this.prototype);}var observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties);}// note: create "working" template that is finalized at instance time
var template=/** @type {PolymerElementConstructor} */this.template;if(template){if(typeof template==='string'){console.error('template getter must return HTMLTemplateElement');template=null;}else{template=template.cloneNode(true);}}this.prototype._template=template;}/**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @return {void}
       * @protected
       * @override
       */},{key:"createProperties",value:function createProperties(props){for(var _p11 in props){createPropertyFromConfig(this.prototype,_p11,props[_p11],props);}}/**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       */},{key:"createObservers",value:function createObservers(observers,dynamicFns){var proto=this.prototype;for(var _i18=0;_i18<observers.length;_i18++){proto._createMethodObserver(observers[_i18],dynamicFns);}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation
       * will return the first `<template>` in a `dom-module` whose `id`
       * matches this element's `is`.
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       */},{key:"polymerElementVersion",/**
       * Current Polymer version in Semver notation.
       * @type {string} Semver notation of the current version of Polymer.
       */get:function get(){return version;}},{key:"template",get:function get(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty('_template',this))){this._template=// If user has put template on prototype (e.g. in legacy via registered
// callback or info object), prefer that first
this.prototype.hasOwnProperty(JSCompiler_renameProperty('_template',this.prototype))?this.prototype._template:// Look in dom-module associated with this element's is
getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template;}return this._template;}/**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       */,set:function set(value){this._template=value;}/**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       */},{key:"importPath",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('_importPath',this))){var meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url);}else{var _module=DomModule.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=_module&&_module.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath;}}return this._importPath;}}]);function PolymerElement(){var _this11;_classCallCheck(this,PolymerElement);_this11=_possibleConstructorReturn(this,_getPrototypeOf(PolymerElement).call(this));/** @type {HTMLTemplateElement} */_this11._template;/** @type {string} */_this11._importPath;/** @type {string} */_this11.rootPath;/** @type {string} */_this11.importPath;/** @type {StampedTemplate | HTMLElement | ShadowRoot} */_this11.root;/** @type {!Object<string, !Element>} */_this11.$;return _this11;}/**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */_createClass(PolymerElement,[{key:"_initializeProperties",value:function _initializeProperties(){this.constructor.finalize();// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName);_get(_getPrototypeOf(PolymerElement.prototype),"_initializeProperties",this).call(this);// set path defaults
this.rootPath=rootPath;this.importPath=this.constructor.importPath;// apply property defaults...
var p$=propertyDefaults(this.constructor);if(!p$){return;}for(var _p12 in p$){var info=p$[_p12];// Don't set default value if there is already an own property, which
// happens when a `properties` property with default but no effects had
// a property set (e.g. bound) by its host before upgrade
if(!this.hasOwnProperty(_p12)){var value=typeof info.value=='function'?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(_p12)){this._setPendingProperty(_p12,value,true);}else{this[_p12]=value;}}}}/**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       */},{key:"connectedCallback",/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
       * @return {void}
       */value:function connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this);}_get(_getPrototypeOf(PolymerElement.prototype),"connectedCallback",this).call(this);}/**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */},{key:"ready",value:function ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$;}_get(_getPrototypeOf(PolymerElement.prototype),"ready",this).call(this);}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */},{key:"_readyClients",value:function _readyClients(){if(this._template){this.root=this._attachDom(/** @type {StampedTemplate} */this.root);}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
_get(_getPrototypeOf(PolymerElement.prototype),"_readyClients",this).call(this);}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */},{key:"_attachDom",value:function _attachDom(dom){if(this.attachShadow){if(dom){if(!this.shadowRoot){this.attachShadow({mode:'open'});}this.shadowRoot.appendChild(dom);return this.shadowRoot;}return null;}else{throw new Error('ShadowDOM not available. '+// TODO(sorvell): move to compile-time conditional when supported
'PolymerElement can create dom as children instead of in '+'ShadowDOM by setting `this.root = this;\` before \`ready\`.');}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */},{key:"updateStyles",value:function updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,properties);}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */},{key:"resolveUrl",value:function resolveUrl(url,base){if(!base&&this.importPath){base=_resolveUrl(this.importPath);}return _resolveUrl(url,base);}/**
       * Overrides `PropertyAccessors` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */}],[{key:"_processStyleText",value:function _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI);}/**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      */},{key:"_finalizeTemplate",value:function _finalizeTemplate(is){/** @const {HTMLTemplateElement} */var template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=true;var importPath=this.importPath;var baseURI=importPath?_resolveUrl(importPath):'';// e.g. support `include="module-name"`, and ShadyCSS
processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template);}}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return _get(_getPrototypeOf(PolymerElement),"_parseTemplateContent",this).call(this,template,templateInfo,nodeInfo);}}]);return PolymerElement;}(polymerElementBase);return PolymerElement;});/**
   * Registers a class prototype for telemetry purposes.
   * @param {HTMLElement} prototype Element prototype to register
   * @this {this}
   * @protected
   */function register(prototype){}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @summary Collapse multiple callbacks into one invocation after a timer.
   */var Debouncer=/*#__PURE__*/function(){function Debouncer(){_classCallCheck(this,Debouncer);this._asyncModule=null;this._callback=null;this._timer=null;}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */_createClass(Debouncer,[{key:"setConfig",value:function setConfig(asyncModule,callback){var _this12=this;this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(function(){_this12._timer=null;_this12._callback();});}/**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"cancel",value:function cancel(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null;}}/**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"flush",value:function flush(){if(this.isActive()){this.cancel();this._callback();}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */},{key:"isActive",value:function isActive(){return this._timer!=null;}/**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */}],[{key:"debounce",value:function debounce(debouncer,asyncModule,callback){if(_instanceof(debouncer,Debouncer)){debouncer.cancel();}else{debouncer=new Debouncer();}debouncer.setConfig(asyncModule,callback);return debouncer;}}]);return Debouncer;}();/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // detect native touch action support
var HAS_NATIVE_TA=typeof document.head.style.touchAction==='string';var GESTURE_KEY='__polymerGestures';var HANDLED_OBJ='__polymerGesturesHandled';var TOUCH_ACTION='__polymerGesturesTouchAction';// radius for tap and track
var TAP_DISTANCE=25;var TRACK_DISTANCE=5;// number of last N track positions to keep
var TRACK_LENGTH=2;// Disabling "mouse" handlers for 2500ms is enough
var MOUSE_TIMEOUT=2500;var MOUSE_EVENTS=['mousedown','mousemove','mouseup','click'];// an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
var MOUSE_WHICH_TO_BUTTONS=[0,1,4,2];var MOUSE_HAS_BUTTONS=function(){try{return new MouseEvent('test',{buttons:1}).buttons===1;}catch(e){return false;}}();/**
   * @param {string} name Possible mouse event name
   * @return {boolean} true if mouse event, false if not
   */function isMouseEvent(name){return MOUSE_EVENTS.indexOf(name)>-1;}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */ // check for passive event listeners
var SUPPORTS_PASSIVE=false;(function(){try{var opts=Object.defineProperty({},'passive',{get:function get(){SUPPORTS_PASSIVE=true;}});window.addEventListener('test',null,opts);window.removeEventListener('test',null,opts);}catch(e){}})();/**
   * Generate settings for event listeners, dependant on `passiveTouchGestures`
   *
   * @param {string} eventName Event name to determine if `{passive}` option is
   *   needed
   * @return {{passive: boolean} | undefined} Options to use for addEventListener
   *   and removeEventListener
   */function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||eventName==='touchend'){return;}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:true};}else{return;}}// Check for touch-only devices
var IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */var clickedLabels=[];/** @type {!Object<boolean>} */var labellable={'button':true,'input':true,'keygen':true,'meter':true,'output':true,'textarea':true,'progress':true,'select':true};// Defined at https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute
/** @type {!Object<boolean>} */var canBeDisabled={'button':true,'command':true,'fieldset':true,'input':true,'keygen':true,'optgroup':true,'option':true,'select':true,'textarea':true};/**
   * @param {HTMLElement} el Element to check labelling status
   * @return {boolean} element can have labels
   */function canBeLabelled(el){return labellable[el.localName]||false;}/**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */function matchingLabels(el){var labels=Array.prototype.slice.call(/** @type {HTMLInputElement} */el.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!labels.length){labels=[];var _root2=el.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(el.id){var matching=_root2.querySelectorAll("label[for = ".concat(el.id,"]"));for(var _i19=0;_i19<matching.length;_i19++){labels.push(/** @type {!HTMLLabelElement} */matching[_i19]);}}}return labels;}// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
var mouseCanceller=function mouseCanceller(mouseEvent){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
var sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return;}// skip synthetic mouse events
mouseEvent[HANDLED_OBJ]={skip:true};// disable "ghost clicks"
if(mouseEvent.type==='click'){var clickFromLabel=false;var path=mouseEvent.composedPath&&mouseEvent.composedPath();if(path){for(var _i20=0;_i20<path.length;_i20++){if(path[_i20].nodeType===Node.ELEMENT_NODE){if(path[_i20].localName==='label'){clickedLabels.push(path[_i20]);}else if(canBeLabelled(path[_i20])){var ownerLabels=matchingLabels(path[_i20]);// check if one of the clicked labels is labelling this element
for(var j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||clickedLabels.indexOf(ownerLabels[j])>-1;}}}if(path[_i20]===POINTERSTATE.mouse.target){return;}}}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(clickFromLabel){return;}mouseEvent.preventDefault();mouseEvent.stopPropagation();}};/**
   * @param {boolean=} setup True to add, false to remove.
   * @return {void}
   */function setupTeardownMouseCanceller(setup){var events=IS_TOUCH_ONLY?['click']:MOUSE_EVENTS;for(var _i21=0,en;_i21<events.length;_i21++){en=events[_i21];if(setup){// reset clickLabels array
clickedLabels.length=0;document.addEventListener(en,mouseCanceller,true);}else{document.removeEventListener(en,mouseCanceller,true);}}}function ignoreMouse(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(true);}var unset=function unset(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null;};POINTERSTATE.mouse.target=e.composedPath()[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset);}/**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */function hasLeftMouseButton(ev){var type=ev.type;// exit early if the event is not a mouse event
if(!isMouseEvent(type)){return false;}// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if(type==='mousemove'){// allow undefined for testing events
var buttons=ev.buttons===undefined?1:ev.buttons;if(_instanceof(ev,window.MouseEvent)&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0;}// buttons is a bitmask, check that the left button bit is set (1)
return Boolean(buttons&1);}else{// allow undefined for testing events
var button=ev.button===undefined?0:ev.button;// ev.button is 0 in mousedown/mouseup/click for left button activation
return button===0;}}function isSyntheticClick(ev){if(ev.type==='click'){// ev.detail is 0 for HTMLElement.click in most browsers
if(ev.detail===0){return true;}// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
var t=_findOriginalTarget(ev);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!t.nodeType||/** @type {Element} */t.nodeType!==Node.ELEMENT_NODE){return true;}var bcr=/** @type {Element} */t.getBoundingClientRect();// use page x/y to account for scrolling
var x=ev.pageX,y=ev.pageY;// ev is a synthetic click if the position is outside the bounding box of the target
return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom);}return false;}var POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:false}};function firstTouchAction(ev){var ta='auto';var path=ev.composedPath&&ev.composedPath();if(path){for(var _i22=0,n;_i22<path.length;_i22++){n=path[_i22];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break;}}}return ta;}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener('mousemove',movefn);document.addEventListener('mouseup',upfn);}function untrackDocument(stateObj){document.removeEventListener('mousemove',stateObj.movefn);document.removeEventListener('mouseup',stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null;}// use a document-wide touchend listener to start the ghost-click prevention mechanism
// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener('touchend',ignoreMouse,SUPPORTS_PASSIVE?{passive:true}:false);/** @type {!Object<string, !GestureRecognizer>} */var gestures={};/** @type {!Array<!GestureRecognizer>} */var recognizers=[];/**
   * Finds the element rendered on the screen at the provided coordinates.
   *
   * Similar to `document.elementFromPoint`, but pierces through
   * shadow roots.
   *
   * @param {number} x Horizontal pixel coordinate
   * @param {number} y Vertical pixel coordinate
   * @return {Element} Returns the deepest shadowRoot inclusive element
   * found at the screen position given.
   */function deepTargetFind(x,y){var node=document.elementFromPoint(x,y);var next=node;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
while(next&&next.shadowRoot&&!window.ShadyDOM){// if there is a node at x/y in the shadowroot, look deeper
var oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);// on Safari, elementFromPoint may return the shadowRoot host
if(oldNext===next){break;}if(next){node=next;}}return node;}/**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event|Touch} ev Event.
   * @return {EventTarget} Returns the event target.
   */function _findOriginalTarget(ev){// shadowdom
if(ev.composedPath){var targets=/** @type {!Array<!EventTarget>} */ev.composedPath();// It shouldn't be, but sometimes targets is empty (window on Safari).
return targets.length>0?targets[0]:ev.target;}// shadydom
return ev.target;}/**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */function _handleNative(ev){var handled;var type=ev.type;var node=ev.currentTarget;var gobj=node[GESTURE_KEY];if(!gobj){return;}var gs=gobj[type];if(!gs){return;}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if(type.slice(0,5)==='touch'){ev=/** @type {TouchEvent} */ev;// eslint-disable-line no-self-assign
var t=ev.changedTouches[0];if(type==='touchstart'){// only handle the first finger
if(ev.touches.length===1){POINTERSTATE.touch.id=t.identifier;}}if(POINTERSTATE.touch.id!==t.identifier){return;}if(!HAS_NATIVE_TA){if(type==='touchstart'||type==='touchmove'){_handleTouchAction(ev);}}}}handled=ev[HANDLED_OBJ];// used to ignore synthetic mouse events
if(handled.skip){return;}// reset recognizer state
for(var _i23=0,r;_i23<recognizers.length;_i23++){r=recognizers[_i23];if(gs[r.name]&&!handled[r.name]){if(r.flow&&r.flow.start.indexOf(ev.type)>-1&&r.reset){r.reset();}}}// enforce gesture recognizer order
for(var _i24=0,_r;_i24<recognizers.length;_i24++){_r=recognizers[_i24];if(gs[_r.name]&&!handled[_r.name]){handled[_r.name]=true;_r[type](ev);}}}/**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */function _handleTouchAction(ev){var t=ev.changedTouches[0];var type=ev.type;if(type==='touchstart'){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=false;}else if(type==='touchmove'){if(POINTERSTATE.touch.scrollDecided){return;}POINTERSTATE.touch.scrollDecided=true;var ta=firstTouchAction(ev);var shouldPrevent=false;var dx=Math.abs(POINTERSTATE.touch.x-t.clientX);var dy=Math.abs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable);else if(ta==='none'){shouldPrevent=true;}else if(ta==='pan-x'){shouldPrevent=dy>dx;}else if(ta==='pan-y'){shouldPrevent=dx>dy;}if(shouldPrevent){ev.preventDefault();}else{_prevent('track');}}}/**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   */function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return true;}return false;}/**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   */function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return true;}return false;}/**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!EventTarget} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   */function _add(node,evType,handler){var recognizer=gestures[evType];var deps=recognizer.deps;var name=recognizer.name;var gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={};}for(var _i25=0,dep,gd;_i25<deps.length;_i25++){dep=deps[_i25];// don't add mouse handlers on iOS because they cause gray selection overlays
if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&dep!=='click'){continue;}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0};}if(gd._count===0){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep));}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1;}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction);}}/**
   * automate event listener removal for native events
   *
   * @private
   * @param {!EventTarget} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(!Event): void} handler Event handler function.
   * @return {void}
   */function _remove(node,evType,handler){var recognizer=gestures[evType];var deps=recognizer.deps;var name=recognizer.name;var gobj=node[GESTURE_KEY];if(gobj){for(var _i26=0,dep,gd;_i26<deps.length;_i26++){dep=deps[_i26];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(gd._count===0){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep));}}}}node.removeEventListener(evType,handler);}/**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   */function register$1(recog){recognizers.push(recog);for(var _i27=0;_i27<recog.emits.length;_i27++){gestures[recog.emits[_i27]]=recog;}}/**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   */function _findRecognizerByEvent(evName){for(var _i28=0,r;_i28<recognizers.length;_i28++){r=recognizers[_i28];for(var j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r;}}}return null;}/**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!EventTarget} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */function setTouchAction(node,value){if(HAS_NATIVE_TA&&_instanceof(node,HTMLElement)){// NOTE: add touchAction async so that events can be added in
// custom element constructors. Otherwise we run afoul of custom
// elements restriction against settings attributes (style) in the
// constructor.
microTask.run(function(){node.style.touchAction=value;});}node[TOUCH_ACTION]=value;}/**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */function _fire(target,type,detail){var ev=new Event(type,{bubbles:true,cancelable:true,composed:true});ev.detail=detail;target.dispatchEvent(ev);// forward `preventDefault` in a clean way
if(ev.defaultPrevented){var preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault();}}}/**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   */function _prevent(evName){var recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=true;}}/* eslint-disable valid-jsdoc */register$1({name:'downup',deps:['mousedown','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['down','up'],info:{movefn:null,upfn:null},/**
     * @this {GestureRecognizer}
     * @return {void}
     */reset:function reset(){untrackDocument(this.info);},/**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return;}var t=_findOriginalTarget(e);var self=this;var movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire('up',t,e);untrackDocument(self.info);}};var upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire('up',t,e);}untrackDocument(self.info);};trackDocument(this.info,movefn,upfn);downupFire('down',t,e);},/**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */touchstart:function touchstart(e){downupFire('down',_findOriginalTarget(e),e.changedTouches[0],e);},/**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */touchend:function touchend(e){downupFire('up',_findOriginalTarget(e),e.changedTouches[0],e);}});/**
   * @param {string} type
   * @param {EventTarget} target
   * @param {Event|Touch} event
   * @param {Event=} preventer
   * @return {void}
   */function downupFire(type,target,event,preventer){if(!target){return;}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function prevent(e){return _prevent(e);}});}register$1({name:'track',touchAction:'none',deps:['mousedown','touchstart','touchmove','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['track'],info:{x:0,y:0,state:'start',started:false,moves:[],/** @this {GestureInfo} */addMove:function addMove(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift();}this.moves.push(move);},movefn:null,upfn:null,prevent:false},/**
     * @this {GestureRecognizer}
     * @return {void}
     */reset:function reset(){this.info.state='start';this.info.started=false;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=false;untrackDocument(this.info);},/**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return;}var t=_findOriginalTarget(e);var self=this;var movefn=function movefn(e){var x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){// first move is 'start', subsequent moves are 'move', mouseup is 'end'
self.info.state=self.info.started?e.type==='mouseup'?'end':'track':'start';if(self.info.state==='start'){// if and only if tracking, always prevent tap
_prevent('tap');}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){// always fire "end"
self.info.state='end';untrackDocument(self.info);}if(t){trackFire(self.info,t,e);}self.info.started=true;}};var upfn=function upfn(e){if(self.info.started){movefn(e);}// remove the temporary listeners
untrackDocument(self.info);};// add temporary document listeners as mouse retargets
trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY;},/**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */touchstart:function touchstart(e){var ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY;},/**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */touchmove:function touchmove(e){var t=_findOriginalTarget(e);var ct=e.changedTouches[0];var x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if(this.info.state==='start'){// if and only if tracking, always prevent tap
_prevent('tap');}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state='track';this.info.started=true;}},/**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */touchend:function touchend(e){var t=_findOriginalTarget(e);var ct=e.changedTouches[0];// only trackend if track was started and not aborted
if(this.info.started){// reset started state on up
this.info.state='end';this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct);}}});/**
   * @param {!GestureInfo} info
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */function trackHasMovedEnough(info,x,y){if(info.prevent){return false;}if(info.started){return true;}var dx=Math.abs(info.x-x);var dy=Math.abs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE;}/**
   * @param {!GestureInfo} info
   * @param {?EventTarget} target
   * @param {Touch} touch
   * @return {void}
   */function trackFire(info,target,touch){if(!target){return;}var secondlast=info.moves[info.moves.length-2];var lastmove=info.moves[info.moves.length-1];var dx=lastmove.x-info.x;var dy=lastmove.y-info.y;var ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y;}_fire(target,'track',{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function hover(){return deepTargetFind(touch.clientX,touch.clientY);}});}register$1({name:'tap',deps:['mousedown','click','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['click','touchend']},emits:['tap'],info:{x:NaN,y:NaN,prevent:false},/**
     * @this {GestureRecognizer}
     * @return {void}
     */reset:function reset(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=false;},/**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */mousedown:function mousedown(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY;}},/**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */click:function click(e){if(hasLeftMouseButton(e)){trackForward(this.info,e);}},/**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */touchstart:function touchstart(e){var touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY;},/**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */touchend:function touchend(e){trackForward(this.info,e.changedTouches[0],e);}});/**
   * @param {!GestureInfo} info
   * @param {Event | Touch} e
   * @param {Event=} preventer
   * @return {void}
   */function trackForward(info,e,preventer){var dx=Math.abs(e.clientX-info.x);var dy=Math.abs(e.clientY-info.y);// find original target from `preventer` for TouchEvents, or `e` for MouseEvents
var t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[/** @type {!HTMLElement} */t.localName]&&t.hasAttribute('disabled')){return;}// dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){// prevent taps from being generated if an event has canceled them
if(!info.prevent){_fire(t,'tap',{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer});}}}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes.
   *
   * The API is designed to be compatible with override points implemented
   * in `TemplateStamp` such that declarative event listeners in
   * templates will support gesture events when this mixin is applied along with
   * `TemplateStamp`.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides API for adding Polymer's
   *   cross-platform
   * gesture events to nodes
   */var GestureEventListeners=dedupingMixin(/**
       * @template T
       * @param {function(new:T)} superClass Class to apply mixin to.
       * @return {function(new:T)} superClass with mixin applied.
       */function(superClass){/**
         * @polymer
         * @mixinClass
         * @implements {Polymer_GestureEventListeners}
         */var GestureEventListeners=/*#__PURE__*/function(_superClass3){_inherits(GestureEventListeners,_superClass3);function GestureEventListeners(){_classCallCheck(this,GestureEventListeners);return _possibleConstructorReturn(this,_getPrototypeOf(GestureEventListeners).apply(this,arguments));}_createClass(GestureEventListeners,[{key:"_addEventListenerToNode",/**
           * Add the event listener to the node if it is a gestures event.
           *
           * @param {!EventTarget} node Node to add event listener to
           * @param {string} eventName Name of event
           * @param {function(!Event):void} handler Listener function to add
           * @return {void}
           * @override
           */value:function _addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){_get(_getPrototypeOf(GestureEventListeners.prototype),"_addEventListenerToNode",this).call(this,node,eventName,handler);}}/**
           * Remove the event listener to the node if it is a gestures event.
           *
           * @param {!EventTarget} node Node to remove event listener from
           * @param {string} eventName Name of event
           * @param {function(!Event):void} handler Listener function to remove
           * @return {void}
           * @override
           */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){_get(_getPrototypeOf(GestureEventListeners.prototype),"_removeEventListenerFromNode",this).call(this,node,eventName,handler);}}}]);return GestureEventListeners;}(superClass);return GestureEventListeners;});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g;var HOST_DIR_REPLACMENT=':host([dir="$1"])';var EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g;var EL_DIR_REPLACMENT=':host([dir="$2"]) $1';/**
   * @type {!Array<!Polymer_DirMixin>}
   */var DIR_INSTANCES=[];/** @type {MutationObserver} */var observer=null;var DOCUMENT_DIR='';function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute('dir');}/**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */function setRTL(instance){if(!instance.__autoDirOptOut){var el=/** @type {!HTMLElement} */instance;el.setAttribute('dir',DOCUMENT_DIR);}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute('dir');for(var _i29=0;_i29<DIR_INSTANCES.length;_i29++){setRTL(DIR_INSTANCES[_i29]);}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection();}}/**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   */var DirMixin=dedupingMixin(function(base){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});}/**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyAccessors}
     * @private
     */var elementBase=PropertyAccessors(base);/**
     * @polymer
     * @mixinClass
     * @implements {Polymer_DirMixin}
     */var Dir=/*#__PURE__*/function(_elementBase){_inherits(Dir,_elementBase);_createClass(Dir,null,[{key:"_processStyleText",/**
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */value:function _processStyleText(cssText,baseURI){cssText=_get(_getPrototypeOf(Dir),"_processStyleText",this).call(this,cssText,baseURI);cssText=this._replaceDirInCssText(cssText);return cssText;}/**
       * Replace `:dir` in the given CSS text
       *
       * @param {string} text CSS text to replace DIR
       * @return {string} Modified CSS
       */},{key:"_replaceDirInCssText",value:function _replaceDirInCssText(text){var replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);if(text!==replacedText){this.__activateDir=true;}return replacedText;}}]);function Dir(){var _this13;_classCallCheck(this,Dir);_this13=_possibleConstructorReturn(this,_getPrototypeOf(Dir).call(this));/** @type {boolean} */_this13.__autoDirOptOut=false;return _this13;}/**
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an HTMLElement
       * @return {void}
       */_createClass(Dir,[{key:"ready",value:function ready(){_get(_getPrototypeOf(Dir.prototype),"ready",this).call(this);this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute('dir');}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */},{key:"connectedCallback",value:function connectedCallback(){if(elementBase.prototype.connectedCallback){_get(_getPrototypeOf(Dir.prototype),"connectedCallback",this).call(this);}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this);}}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){_get(_getPrototypeOf(Dir.prototype),"disconnectedCallback",this).call(this);}if(this.constructor.__activateDir){var idx=DIR_INSTANCES.indexOf(this);if(idx>-1){DIR_INSTANCES.splice(idx,1);}}}}]);return Dir;}(elementBase);Dir.__activateDir=false;return Dir;});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var scheduled=false;var beforeRenderQueue=[];var afterRenderQueue=[];function schedule(){scheduled=true;// before next render
requestAnimationFrame(function(){scheduled=false;flushQueue(beforeRenderQueue);// after the render
setTimeout(function(){runQueue(afterRenderQueue);});});}function flushQueue(queue){while(queue.length){callMethod(queue.shift());}}function runQueue(queue){for(var _i30=0,l=queue.length;_i30<l;_i30++){callMethod(queue.shift());}}function callMethod(info){var context=info[0];var callback=info[1];var args=info[2];try{callback.apply(context,args);}catch(e){setTimeout(function(){throw e;});}}/**
   * Enqueues a callback which will be run after the next render, equivalent
   * to one task (`setTimeout`) after the next `requestAnimationFrame`.
   *
   * This method is useful for tuning the first-render performance of an
   * element or application by deferring non-critical work until after the
   * first paint.  Typical non-render-critical work may include adding UI
   * event listeners and aria attributes.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function afterNextRender(context,callback,args){if(!scheduled){schedule();}afterRenderQueue.push([context,callback,args]);}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function resolve(){document.body.removeAttribute('unresolved');}if(document.readyState==='interactive'||document.readyState==='complete'){resolve();}else{window.addEventListener('DOMContentLoaded',resolve);}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount};}var EDIT_LEAVE=0;var EDIT_UPDATE=1;var EDIT_ADD=2;var EDIT_DELETE=3;// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){// "Deletion" columns
var rowCount=oldEnd-oldStart+1;var columnCount=currentEnd-currentStart+1;var distances=new Array(rowCount);// "Addition" rows. Initialize null column.
for(var _i31=0;_i31<rowCount;_i31++){distances[_i31]=new Array(columnCount);distances[_i31][0]=_i31;}// Initialize null row
for(var j=0;j<columnCount;j++){distances[0][j]=j;}for(var _i32=1;_i32<rowCount;_i32++){for(var _j=1;_j<columnCount;_j++){if(equals(current[currentStart+_j-1],old[oldStart+_i32-1]))distances[_i32][_j]=distances[_i32-1][_j-1];else{var north=distances[_i32-1][_j]+1;var west=distances[_i32][_j-1]+1;distances[_i32][_j]=north<west?north:west;}}}return distances;}// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances){var i=distances.length-1;var j=distances[0].length-1;var current=distances[i][j];var edits=[];while(i>0||j>0){if(i==0){edits.push(EDIT_ADD);j--;continue;}if(j==0){edits.push(EDIT_DELETE);i--;continue;}var northWest=distances[i-1][j-1];var west=distances[i-1][j];var north=distances[i][j-1];var min=void 0;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE);}else{edits.push(EDIT_UPDATE);current=northWest;}i--;j--;}else if(min==west){edits.push(EDIT_DELETE);i--;current=west;}else{edits.push(EDIT_ADD);j--;current=north;}}edits.reverse();return edits;}/**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */ /**
   * Lacking individual splice mutation information, the minimal set of
   * splices can be synthesized given the previous state and final state of an
   * array. The basic approach is to calculate the edit distance matrix and
   * choose the shortest path through it.
   *
   * Complexity: O(l * p)
   *   l: The length of the current array
   *   p: The length of the old array
   *
   * @param {!Array} current The current "changed" array for which to
   * calculate splices.
   * @param {number} currentStart Starting index in the `current` array for
   * which splices are calculated.
   * @param {number} currentEnd Ending index in the `current` array for
   * which splices are calculated.
   * @param {!Array} old The original "unchanged" array to compare `current`
   * against to determine splices.
   * @param {number} oldStart Starting index in the `old` array for
   * which splices are calculated.
   * @param {number} oldEnd Ending index in the `old` array for
   * which splices are calculated.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){var prefixCount=0;var suffixCount=0;var splice;var minLength=Math.min(currentEnd-currentStart,oldEnd-oldStart);if(currentStart==0&&oldStart==0)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(currentEnd-currentStart==0&&oldEnd-oldStart==0)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd){splice.removed.push(old[oldStart++]);}return[splice];}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];var ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=undefined;var splices=[];var index=currentStart;var oldIndex=oldStart;for(var _i33=0;_i33<ops.length;_i33++){switch(ops[_i33]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=undefined;}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice);}return splices;}function sharedPrefix(current,old,searchLength){for(var _i34=0;_i34<searchLength;_i34++){if(!equals(current[_i34],old[_i34]))return _i34;}return searchLength;}function sharedSuffix(current,old,searchLength){var index1=current.length;var index2=old.length;var count=0;while(count<searchLength&&equals(current[--index1],old[--index2])){count++;}return count;}/**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length);}function equals(currentValue,previousValue){return currentValue===previousValue;}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Returns true if `node` is a slot element
   * @param {!Node} node Node to test.
   * @return {boolean} Returns true if the given `node` is a slot
   * @private
   */function isSlot(node){return node.localName==='slot';}/**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   */var FlattenedNodesObserver=/*#__PURE__*/function(){_createClass(FlattenedNodesObserver,null,[{key:"getFlattenedNodes",/**
     * Returns the list of flattened nodes for the given `node`.
     * This list consists of a node's children and, for any children
     * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
     * For example, if the observed node has children `<a></a><slot></slot><b></b>`
     * and the `<slot>` has one `<div>` assigned to it, then the flattened
     * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
     * `<slot>` elements assigned to it, these are flattened as well.
     *
     * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
     *      return the list of flattened nodes.
     * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
     * @nocollapse See https://github.com/google/closure-compiler/issues/2763
     */value:function getFlattenedNodes(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:true});}else{return Array.from(node.childNodes).map(function(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:true});}else{return[node];}}).reduce(function(a,b){return a.concat(b);},[]);}}/**
     * @param {!HTMLElement} target Node on which to listen for changes.
     * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
     * or removals from the target's list of flattened nodes.
     */}]);function FlattenedNodesObserver(target,callback){var _this14=this;_classCallCheck(this,FlattenedNodesObserver);/**
       * @type {MutationObserver}
       * @private
       */this._shadyChildrenObserver=null;/**
       * @type {MutationObserver}
       * @private
       */this._nativeChildrenObserver=null;this._connected=false;/**
       * @type {!HTMLElement}
       * @private
       */this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=false;/**
       * @type {function()}
       * @private
       */this._boundSchedule=function(){_this14._schedule();};this.connect();this._schedule();}/**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */_createClass(FlattenedNodesObserver,[{key:"connect",value:function connect(){var _this15=this;if(isSlot(this._target)){this._listenSlots([this._target]);}else if(this._target.children){this._listenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,function(mutations){_this15._processMutations(mutations);});}else{this._nativeChildrenObserver=new MutationObserver(function(mutations){_this15._processMutations(mutations);});this._nativeChildrenObserver.observe(this._target,{childList:true});}}this._connected=true;}/**
     * Deactivates the flattened nodes observer. After calling this method
     * the observer callback will not be called when changes to flattened nodes
     * occur. The `connect` method may be subsequently called to reactivate
     * the observer.
     *
     * @return {void}
     */},{key:"disconnect",value:function disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target]);}else if(this._target.children){this._unlistenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null;}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null;}}this._connected=false;}/**
     * @return {void}
     * @private
     */},{key:"_schedule",value:function _schedule(){var _this16=this;if(!this._scheduled){this._scheduled=true;microTask.run(function(){return _this16.flush();});}}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processMutations",value:function _processMutations(mutations){this._processSlotMutations(mutations);this.flush();}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processSlotMutations",value:function _processSlotMutations(mutations){if(mutations){for(var _i35=0;_i35<mutations.length;_i35++){var mutation=mutations[_i35];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes);}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes);}}}}/**
     * Flushes the observer causing any pending changes to be immediately
     * delivered the observer callback. By default these changes are delivered
     * asynchronously at the next microtask checkpoint.
     *
     * @return {boolean} Returns true if any pending changes caused the observer
     * callback to run.
     */},{key:"flush",value:function flush(){if(!this._connected){return false;}if(window.ShadyDOM){ShadyDOM.flush();}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords());}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords());}this._scheduled=false;var info={target:this._target,addedNodes:[],removedNodes:[]};var newNodes=this.constructor.getFlattenedNodes(this._target);var splices=calculateSplices(newNodes,this._effectiveNodes);// process removals
for(var _i36=0,s;_i36<splices.length&&(s=splices[_i36]);_i36++){for(var j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n);}}// process adds
for(var _i37=0,_s2;_i37<splices.length&&(_s2=splices[_i37]);_i37++){for(var _j2=_s2.index;_j2<_s2.index+_s2.addedCount;_j2++){info.addedNodes.push(newNodes[_j2]);}}// update cache
this._effectiveNodes=newNodes;var didFlush=false;if(info.addedNodes.length||info.removedNodes.length){didFlush=true;this.callback.call(this._target,info);}return didFlush;}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_listenSlots",value:function _listenSlots(nodeList){for(var _i38=0;_i38<nodeList.length;_i38++){var n=nodeList[_i38];if(isSlot(n)){n.addEventListener('slotchange',this._boundSchedule);}}}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_unlistenSlots",value:function _unlistenSlots(nodeList){for(var _i39=0;_i39<nodeList.length;_i39++){var n=nodeList[_i39];if(isSlot(n)){n.removeEventListener('slotchange',this._boundSchedule);}}}}]);return FlattenedNodesObserver;}();/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /* eslint-enable no-unused-vars */var debouncerQueue=[];/**
   * Adds a `Debouncer` to a list of globally flushable tasks.
   *
   * @param {!Debouncer} debouncer Debouncer to enqueue
   * @return {void}
   */var enqueueDebouncer=function enqueueDebouncer(debouncer){debouncerQueue.push(debouncer);};function flushDebouncers(){var didFlush=Boolean(debouncerQueue.length);while(debouncerQueue.length){try{debouncerQueue.shift().flush();}catch(e){setTimeout(function(){throw e;});}}return didFlush;}/**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */var flush$1=function flush$1(){var shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush();}debouncers=flushDebouncers();}while(shadyDOM||debouncers);};/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /* eslint-enable no-unused-vars */var p=Element.prototype;/**
   * @const {function(this:Node, string): boolean}
   */var normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector;/**
   * Cross-platform `element.matches` shim.
   *
   * @function matchesSelector
   * @param {!Node} node Node to check selector against
   * @param {string} selector Selector to match
   * @return {boolean} True if node matched selector
   */var matchesSelector=function matchesSelector(node,selector){return normalizedMatchesSelector.call(node,selector);};/**
   * Node API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is a `Node`.
   *
   */var DomApi=/*#__PURE__*/function(){/**
     * @param {Node} node Node for which to create a Polymer.dom helper object.
     */function DomApi(node){_classCallCheck(this,DomApi);this.node=node;}/**
     * Returns an instance of `FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!FlattenedNodesObserver} Observer instance
     */_createClass(DomApi,[{key:"observeNodes",value:function observeNodes(callback){return new FlattenedNodesObserver(/** @type {!HTMLElement} */this.node,callback);}/**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param {!FlattenedNodesObserver} observerHandle Observer instance
     *   to disconnect.
     * @return {void}
     */},{key:"unobserveNodes",value:function unobserveNodes(observerHandle){observerHandle.disconnect();}/**
     * Provided as a backwards-compatible API only.  This method does nothing.
     * @return {void}
     */},{key:"notifyObserver",value:function notifyObserver(){}/**
     * Returns true if the provided node is contained with this element's
     * light-DOM children or shadow root, including any nested shadow roots
     * of children therein.
     *
     * @param {Node} node Node to test
     * @return {boolean} Returns true if the given `node` is contained within
     *   this element's light or shadow DOM.
     */},{key:"deepContains",value:function deepContains(node){if(this.node.contains(node)){return true;}var n=node;var doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this.node){// use logical parentnode, or native ShadowRoot host
n=n.parentNode||n.host;}return n===this.node;}/**
     * Returns the root node of this node.  Equivalent to `getRootNode()`.
     *
     * @return {Node} Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     */},{key:"getOwnerRoot",value:function getOwnerRoot(){return this.node.getRootNode();}/**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @return {!Array<!Node>} Array of assigned nodes
     */},{key:"getDistributedNodes",value:function getDistributedNodes(){return this.node.localName==='slot'?this.node.assignedNodes({flatten:true}):[];}/**
     * Returns an array of all slots this element was distributed to.
     *
     * @return {!Array<!HTMLSlotElement>} Description
     */},{key:"getDestinationInsertionPoints",value:function getDestinationInsertionPoints(){var ip$=[];var n=this.node.assignedSlot;while(n){ip$.push(n);n=n.assignedSlot;}return ip$;}/**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param {!Node} node Node to import
     * @param {boolean} deep True if the node should be cloned deeply during
     *   import
     * @return {Node} Clone of given node imported to this owner document
     */},{key:"importNode",value:function importNode(node,deep){var doc=_instanceof(this.node,Document)?this.node:this.node.ownerDocument;return doc.importNode(node,deep);}/**
     * @return {!Array<!Node>} Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(/** @type {!HTMLElement} */this.node);}/**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param {string} selector Selector to filter nodes against
     * @return {!Array<!HTMLElement>} List of flattened child elements
     */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var c$=this.getEffectiveChildNodes();var list=[];for(var _i40=0,l=c$.length,c;_i40<l&&(c=c$[_i40]);_i40++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c);}}return list;}/**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     *
     * @return {Node|undefined} Currently focused element
     */},{key:"activeElement",get:function get(){var node=this.node;return node._activeElement!==undefined?node._activeElement:node.activeElement;}}]);return DomApi;}();function forwardMethods(proto,methods){var _loop=function _loop(_i41){var method=methods[_i41];/* eslint-disable valid-jsdoc */proto[method]=/** @this {DomApi} */function(){return this.node[method].apply(this.node,arguments);};/* eslint-enable */};for(var _i41=0;_i41<methods.length;_i41++){_loop(_i41);}}function forwardReadOnlyProperties(proto,properties){var _loop2=function _loop2(_i42){var name=properties[_i42];Object.defineProperty(proto,name,{get:function get(){var domApi=/** @type {DomApi} */this;return domApi.node[name];},configurable:true});};for(var _i42=0;_i42<properties.length;_i42++){_loop2(_i42);}}function forwardProperties(proto,properties){var _loop3=function _loop3(_i43){var name=properties[_i43];Object.defineProperty(proto,name,{/**
         * @this {DomApi}
         * @return {*} .
         */get:function get(){return this.node[name];},/**
         * @this {DomApi}
         * @param {*} value .
         */set:function set(value){this.node[name]=value;},configurable:true});};for(var _i43=0;_i43<properties.length;_i43++){_loop3(_i43);}}/**
   * Event API wrapper class returned from `dom.(target)` when
   * `target` is an `Event`.
   */var EventApi=/*#__PURE__*/function(){function EventApi(event){_classCallCheck(this,EventApi);this.event=event;}/**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */_createClass(EventApi,[{key:"rootTarget",get:function get(){return this.event.composedPath()[0];}/**
     * Returns the local (re-targeted) target for this event.
     *
     * @return {!EventTarget} The local (re-targeted) target for this event.
     */},{key:"localTarget",get:function get(){return this.event.target;}/**
     * Returns the `composedPath` for this event.
     * @return {!Array<!EventTarget>} The nodes this event propagated through
     */},{key:"path",get:function get(){return this.event.composedPath();}}]);return EventApi;}();/**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */DomApi.prototype.cloneNode;/**
   * @function
   * @param {!Node} node
   * @return {!Node}
   */DomApi.prototype.appendChild;/**
   * @function
   * @param {!Node} newChild
   * @param {Node} refChild
   * @return {!Node}
   */DomApi.prototype.insertBefore;/**
   * @function
   * @param {!Node} node
   * @return {!Node}
   */DomApi.prototype.removeChild;/**
   * @function
   * @param {!Node} oldChild
   * @param {!Node} newChild
   * @return {!Node}
   */DomApi.prototype.replaceChild;/**
   * @function
   * @param {string} name
   * @param {string} value
   * @return {void}
   */DomApi.prototype.setAttribute;/**
   * @function
   * @param {string} name
   * @return {void}
   */DomApi.prototype.removeAttribute;/**
   * @function
   * @param {string} selector
   * @return {?Element}
   */DomApi.prototype.querySelector;/**
   * @function
   * @param {string} selector
   * @return {!NodeList<!Element>}
   */DomApi.prototype.querySelectorAll;/** @type {?Node} */DomApi.prototype.parentNode;/** @type {?Node} */DomApi.prototype.firstChild;/** @type {?Node} */DomApi.prototype.lastChild;/** @type {?Node} */DomApi.prototype.nextSibling;/** @type {?Node} */DomApi.prototype.previousSibling;/** @type {?HTMLElement} */DomApi.prototype.firstElementChild;/** @type {?HTMLElement} */DomApi.prototype.lastElementChild;/** @type {?HTMLElement} */DomApi.prototype.nextElementSibling;/** @type {?HTMLElement} */DomApi.prototype.previousElementSibling;/** @type {!Array<!Node>} */DomApi.prototype.childNodes;/** @type {!Array<!HTMLElement>} */DomApi.prototype.children;/** @type {?DOMTokenList} */DomApi.prototype.classList;/** @type {string} */DomApi.prototype.textContent;/** @type {string} */DomApi.prototype.innerHTML;forwardMethods(DomApi.prototype,['cloneNode','appendChild','insertBefore','removeChild','replaceChild','setAttribute','removeAttribute','querySelector','querySelectorAll']);forwardReadOnlyProperties(DomApi.prototype,['parentNode','firstChild','lastChild','nextSibling','previousSibling','firstElementChild','lastElementChild','nextElementSibling','previousElementSibling','childNodes','children','classList']);forwardProperties(DomApi.prototype,['textContent','innerHTML']);/**
   * Legacy DOM and Event manipulation API wrapper factory used to abstract
   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
   * older browsers.
   *
   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
   * in the majority of cases simply facades directly to the standard native
   * API.
   *
   * @summary Legacy DOM and Event manipulation API wrapper factory used to
   * abstract differences between native Shadow DOM and "Shady DOM."
   * @param {(Node|Event)=} obj Node or event to operate on
   * @return {!DomApi|!EventApi} Wrapper providing either node API or event API
   */var dom=function dom(obj){obj=obj||document;if(!obj.__domApi){var helper;if(_instanceof(obj,Event)){helper=new EventApi(obj);}else{helper=new DomApi(obj);}obj.__domApi=helper;}return obj.__domApi;};/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var styleInterface=window.ShadyCSS;/**
   * Element class mixin that provides Polymer's "legacy" API intended to be
   * backward-compatible to the greatest extent possible with the API
   * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
   * defined using the `Polymer({...})` function.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin ElementMixin
   * @appliesMixin GestureEventListeners
   * @property isAttached {boolean} Set to `true` in this element's
   *   `connectedCallback` and `false` in `disconnectedCallback`
   * @summary Element class mixin that provides Polymer's "legacy" API
   */var LegacyElementMixin=dedupingMixin(function(base){/**
     * @constructor
     * @extends {base}
     * @implements {Polymer_ElementMixin}
     * @implements {Polymer_GestureEventListeners}
     * @implements {Polymer_DirMixin}
     * @private
     */var legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base)));/**
     * Map of simple names to touch action names
     * @dict
     */var DIRECTION_MAP={'x':'pan-x','y':'pan-y','none':'none','all':'auto'};/**
     * @polymer
     * @mixinClass
     * @extends {legacyElementBase}
     * @implements {Polymer_LegacyElementMixin}
     * @unrestricted
     */var LegacyElement=/*#__PURE__*/function(_legacyElementBase){_inherits(LegacyElement,_legacyElementBase);function LegacyElement(){var _this17;_classCallCheck(this,LegacyElement);_this17=_possibleConstructorReturn(this,_getPrototypeOf(LegacyElement).call(this));/** @type {boolean} */_this17.isAttached;/** @type {WeakMap<!Element, !Object<string, !Function>>} */_this17.__boundListeners;/** @type {Object<string, Function>} */_this17._debouncers;// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
_this17._applyListeners();return _this17;}/**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       */_createClass(LegacyElement,[{key:"created",/**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       * @return {void}
       */value:function created(){}/**
       * Provides an implementation of `connectedCallback`
       * which adds Polymer legacy API's `attached` method.
       * @return {void}
       * @override
       */},{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(LegacyElement.prototype),"connectedCallback",this).call(this);this.isAttached=true;this.attached();}/**
       * Legacy callback called during `connectedCallback`, for overriding
       * by the user.
       * @return {void}
       */},{key:"attached",value:function attached(){}/**
       * Provides an implementation of `disconnectedCallback`
       * which adds Polymer legacy API's `detached` method.
       * @return {void}
       * @override
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(LegacyElement.prototype),"disconnectedCallback",this).call(this);this.isAttached=false;this.detached();}/**
       * Legacy callback called during `disconnectedCallback`, for overriding
       * by the user.
       * @return {void}
       */},{key:"detached",value:function detached(){}/**
       * Provides an override implementation of `attributeChangedCallback`
       * which adds the Polymer legacy API's `attributeChanged` method.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){_get(_getPrototypeOf(LegacyElement.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);this.attributeChanged(name,old,value);}}/**
       * Legacy callback called during `attributeChangedChallback`, for overriding
       * by the user.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){}// eslint-disable-line no-unused-vars
/**
       * Overrides the default `Polymer.PropertyEffects` implementation to
       * add support for class initialization via the `_registered` callback.
       * This is called only when the first instance of the element is created.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */},{key:"_initializeProperties",value:function _initializeProperties(){var proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty('__hasRegisterFinished')){proto.__hasRegisterFinished=true;this._registered();}_get(_getPrototypeOf(LegacyElement.prototype),"_initializeProperties",this).call(this);this.root=/** @type {HTMLElement} */this;this.created();}/**
       * Called automatically when an element is initializing.
       * Users may override this method to perform class registration time
       * work. The implementation should ensure the work is performed
       * only once for the class.
       * @protected
       * @return {void}
       */},{key:"_registered",value:function _registered(){}/**
       * Overrides the default `Polymer.PropertyEffects` implementation to
       * add support for installing `hostAttributes` and `listeners`.
       *
       * @return {void}
       * @override
       */},{key:"ready",value:function ready(){this._ensureAttributes();_get(_getPrototypeOf(LegacyElement.prototype),"ready",this).call(this);}/**
       * Ensures an element has required attributes. Called when the element
       * is being readied via `ready`. Users should override to set the
       * element's required attributes. The implementation should be sure
       * to check and not override existing attributes added by
       * the user of the element. Typically, setting attributes should be left
       * to the element user and not done here; reasonable exceptions include
       * setting aria roles and focusability.
       * @protected
       * @return {void}
       */},{key:"_ensureAttributes",value:function _ensureAttributes(){}/**
       * Adds element event listeners. Called when the element
       * is being readied via `ready`. Users should override to
       * add any required element event listeners.
       * In performance critical elements, the work done here should be kept
       * to a minimum since it is done before the element is rendered. In
       * these elements, consider adding listeners asynchronously so as not to
       * block render.
       * @protected
       * @return {void}
       */},{key:"_applyListeners",value:function _applyListeners(){}/**
       * Converts a typed JavaScript value to a string.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features. To customize
       * how properties are serialized to attributes for attribute bindings and
       * `reflectToAttribute: true` properties as well as this method, override
       * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
       *
       * @param {*} value Value to deserialize
       * @return {string | undefined} Serialized value
       */},{key:"serialize",value:function serialize(value){return this._serializeValue(value);}/**
       * Converts a string to a typed JavaScript value.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.  To customize
       * how attributes are deserialized to properties for in
       * `attributeChangedCallback`, override `_deserializeValue` method
       * provided by `Polymer.PropertyAccessors`.
       *
       * @param {string} value String to deserialize
       * @param {*} type Type to deserialize the string to
       * @return {*} Returns the deserialized value in the `type` given.
       */},{key:"deserialize",value:function deserialize(value,type){return this._deserializeValue(value,type);}/**
       * Serializes a property to its associated attribute.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to reflect.
       * @return {void}
       */},{key:"reflectPropertyToAttribute",value:function reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value);}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @param {Element} node Element to set attribute to.
       * @return {void}
       */},{key:"serializeValueToAttribute",value:function serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(/** @type {Element} */node||this,value,attribute);}/**
       * Copies own properties (including accessor descriptors) from a source
       * object to a target object.
       *
       * @param {Object} prototype Target object to copy properties to.
       * @param {Object} api Source object to copy properties from.
       * @return {Object} prototype object that was passed as first argument.
       */},{key:"extend",value:function extend(prototype,api){if(!(prototype&&api)){return prototype||api;}var n$=Object.getOwnPropertyNames(api);for(var _i44=0,n;_i44<n$.length&&(n=n$[_i44]);_i44++){var pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd);}}return prototype;}/**
       * Copies props from a source object to a target object.
       *
       * Note, this method uses a simple `for...in` strategy for enumerating
       * properties.  To ensure only `ownProperties` are copied from source
       * to target and that accessor implementations are copied, use `extend`.
       *
       * @param {!Object} target Target object to copy properties to.
       * @param {!Object} source Source object to copy properties from.
       * @return {!Object} Target object that was passed as first argument.
       */},{key:"mixin",value:function mixin(target,source){for(var _i45 in source){target[_i45]=source[_i45];}return target;}/**
       * Sets the prototype of an object.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       * @param {Object} object The object on which to set the prototype.
       * @param {Object} prototype The prototype that will be set on the given
       * `object`.
       * @return {Object} Returns the given `object` with its prototype set
       * to the given `prototype` object.
       */},{key:"chainObject",value:function chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype;}return object;}/* **** Begin Template **** */ /**
       * Calls `importNode` on the `content` of the `template` specified and
       * returns a document fragment containing the imported content.
       *
       * @param {HTMLTemplateElement} template HTML template element to instance.
       * @return {!DocumentFragment} Document fragment containing the imported
       *   template content.
      */},{key:"instanceTemplate",value:function instanceTemplate(template){var content=this.constructor._contentForTemplate(template);var dom$$1=/** @type {!DocumentFragment} */document.importNode(content,true);return dom$$1;}/* **** Begin Events **** */ /**
       * Dispatches a custom event with an optional detail value.
       *
       * @param {string} type Name of event type.
       * @param {*=} detail Detail value containing event-specific
       *   payload.
       * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
       *  options Object specifying options.  These may include:
       *  `bubbles` (boolean, defaults to `true`),
       *  `cancelable` (boolean, defaults to false), and
       *  `node` on which to fire the event (HTMLElement, defaults to `this`).
       * @return {!Event} The new event that was fired.
       */},{key:"fire",value:function fire(type,detail,options){options=options||{};detail=detail===null||detail===undefined?{}:detail;var event=new Event(type,{bubbles:options.bubbles===undefined?true:options.bubbles,cancelable:Boolean(options.cancelable),composed:options.composed===undefined?true:options.composed});event.detail=detail;var node=options.node||this;node.dispatchEvent(event);return event;}/**
       * Convenience method to add an event listener on a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to add event listener to.
       * @param {string} eventName Name of event to listen for.
       * @param {string} methodName Name of handler method on `this` to call.
       * @return {void}
       */},{key:"listen",value:function listen(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var hbl=this.__boundListeners||(this.__boundListeners=new WeakMap());var bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl);}var key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this);}}/**
       * Convenience method to remove an event listener from a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to remove event listener from.
       * @param {string} eventName Name of event to stop listening to.
       * @param {string} methodName Name of handler method on `this` to not call
       anymore.
       * @return {void}
       */},{key:"unlisten",value:function unlisten(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var bl=this.__boundListeners&&this.__boundListeners.get(node);var key=eventName+methodName;var handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null;}}/**
       * Override scrolling behavior to all direction, one direction, or none.
       *
       * Valid scroll directions:
       *   - 'all': scroll in any direction
       *   - 'x': scroll only in the 'x' direction
       *   - 'y': scroll only in the 'y' direction
       *   - 'none': disable scrolling for this node
       *
       * @param {string=} direction Direction to allow scrolling
       * Defaults to `all`.
       * @param {Element=} node Element to apply scroll direction setting.
       * Defaults to `this`.
       * @return {void}
       */},{key:"setScrollDirection",value:function setScrollDirection(direction,node){setTouchAction(/** @type {Element} */node||this,DIRECTION_MAP[direction]||'auto');}/* **** End Events **** */ /**
       * Convenience method to run `querySelector` on this local DOM scope.
       *
       * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
       *
       * @param {string} slctr Selector to run on this local DOM scope
       * @return {Element} Element found by the selector, or null if not found.
       */},{key:"$$",value:function $$(slctr){return this.root.querySelector(slctr);}/**
       * Return the element whose local dom within which this element
       * is contained. This is a shorthand for
       * `this.getRootNode().host`.
       * @this {Element}
       */},{key:"distributeContent",/**
       * Force this element to distribute its children to its local dom.
       * This should not be necessary as of Polymer 2.0.2 and is provided only
       * for backwards compatibility.
       * @return {void}
       */value:function distributeContent(){if(window.ShadyDOM&&this.shadowRoot){ShadyDOM.flush();}}/**
       * Returns a list of nodes that are the effective childNodes. The effective
       * childNodes list is the same as the element's childNodes except that
       * any `<content>` elements are replaced with the list of nodes distributed
       * to the `<content>`, the result of its `getDistributedNodes` method.
       * @return {!Array<!Node>} List of effective child nodes.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){var thisEl=/** @type {Element} */this;var domApi=/** @type {DomApi} */dom(thisEl);return domApi.getEffectiveChildNodes();}/**
       * Returns a list of nodes distributed within this element that match
       * `selector`. These can be dom children or elements distributed to
       * children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of distributed elements that match selector.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var thisEl=/** @type {Element} */this;var domApi=/** @type {DomApi} */dom(thisEl);return domApi.queryDistributedElements(selector);}/**
       * Returns a list of elements that are the effective children. The effective
       * children list is the same as the element's children except that
       * any `<content>` elements are replaced with the list of elements
       * distributed to the `<content>`.
       *
       * @return {!Array<!Node>} List of effective children.
       */},{key:"getEffectiveChildren",value:function getEffectiveChildren(){var list=this.getEffectiveChildNodes();return list.filter(function(/** @type {!Node} */n){return n.nodeType===Node.ELEMENT_NODE;});}/**
       * Returns a string of text content that is the concatenation of the
       * text content's of the element's effective childNodes (the elements
       * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
       *
       * @return {string} List of effective children.
       */},{key:"getEffectiveTextContent",value:function getEffectiveTextContent(){var cn=this.getEffectiveChildNodes();var tc=[];for(var _i46=0,c;c=cn[_i46];_i46++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent);}}return tc.join('');}/**
       * Returns the first effective childNode within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {Node} First effective child node that matches selector.
       */},{key:"queryEffectiveChildren",value:function queryEffectiveChildren(selector){var e$=this.queryDistributedElements(selector);return e$&&e$[0];}/**
       * Returns a list of effective childNodes within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of effective child nodes that match selector.
       */},{key:"queryAllEffectiveChildren",value:function queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector);}/**
       * Returns a list of nodes distributed to this element's `<slot>`.
       *
       * If this element contains more than one `<slot>` in its local DOM,
       * an optional selector may be passed to choose the desired content.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<slot>`.  Defaults to `content`.
       * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
       */},{key:"getContentChildNodes",value:function getContentChildNodes(slctr){var content=this.root.querySelector(slctr||'slot');return content?/** @type {DomApi} */dom(content).getDistributedNodes():[];}/**
       * Returns a list of element children distributed to this element's
       * `<slot>`.
       *
       * If this element contains more than one `<slot>` in its
       * local DOM, an optional selector may be passed to choose the desired
       * content.  This method differs from `getContentChildNodes` in that only
       * elements are returned.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<content>`.  Defaults to `content`.
       * @return {!Array<!HTMLElement>} List of distributed nodes for the
       *   `<slot>`.
       * @suppress {invalidCasts}
       */},{key:"getContentChildren",value:function getContentChildren(slctr){var children=/** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE;});return children;}/**
       * Checks whether an element is in this element's light DOM tree.
       *
       * @param {?Node} node The element to be checked.
       * @return {boolean} true if node is in this element's light DOM tree.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"isLightDescendant",value:function isLightDescendant(node){var thisNode=/** @type {Node} */this;return thisNode!==node&&thisNode.contains(node)&&thisNode.getRootNode()===node.getRootNode();}/**
       * Checks whether an element is in this element's local DOM tree.
       *
       * @param {!Element} node The element to be checked.
       * @return {boolean} true if node is in this element's local DOM tree.
       */},{key:"isLocalDescendant",value:function isLocalDescendant(node){return this.root===node.getRootNode();}/**
       * No-op for backwards compatibility. This should now be handled by
       * ShadyCss library.
       * @param  {*} container Unused
       * @param  {*} shouldObserve Unused
       * @return {void}
       */},{key:"scopeSubtree",value:function scopeSubtree(container,shouldObserve){}// eslint-disable-line no-unused-vars
/**
       * Returns the computed style value for the given property.
       * @param {string} property The css property name.
       * @return {string} Returns the computed css property value for the given
       * `property`.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"getComputedStyleValue",value:function getComputedStyleValue(property){return styleInterface.getComputedStyleValue(/** @type {!Element} */this,property);}// debounce
/**
       * Call `debounce` to collapse multiple requests for a named task into
       * one invocation which is made after the wait time has elapsed with
       * no new request.  If no wait time is given, the callback will be called
       * at microtask timing (guaranteed before paint).
       *
       *     debouncedClickAction(e) {
       *       // will not call `processClick` more than once per 100ms
       *       this.debounce('click', function() {
       *        this.processClick();
       *       } 100);
       *     }
       *
       * @param {string} jobName String to identify the debounce job.
       * @param {function():void} callback Function that is called (with `this`
       *   context) when the wait time elapses.
       * @param {number} wait Optional wait time in milliseconds (ms) after the
       *   last signal that must elapse before invoking `callback`
       * @return {!Object} Returns a debouncer object on which exists the
       * following methods: `isActive()` returns true if the debouncer is
       * active; `cancel()` cancels the debouncer if it is active;
       * `flush()` immediately invokes the debounced callback if the debouncer
       * is active.
       */},{key:"debounce",value:function debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],wait>0?timeOut.after(wait):microTask,callback.bind(this));}/**
       * Returns whether a named debouncer is active.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {boolean} Whether the debouncer is active (has not yet fired).
       */},{key:"isDebouncerActive",value:function isDebouncerActive(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive());}/**
       * Immediately calls the debouncer `callback` and inactivates it.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */},{key:"flushDebouncer",value:function flushDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush();}}/**
       * Cancels an active debouncer.  The `callback` will not be called.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */},{key:"cancelDebouncer",value:function cancelDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel();}}/**
       * Runs a callback function asynchronously.
       *
       * By default (if no waitTime is specified), async callbacks are run at
       * microtask timing, which will occur before paint.
       *
       * @param {!Function} callback The callback function to run, bound to `this`.
       * @param {number=} waitTime Time to wait before calling the
       *   `callback`.  If unspecified or 0, the callback will be run at microtask
       *   timing (before paint).
       * @return {number} Handle that may be used to cancel the async job.
       */},{key:"async",value:function async(callback,waitTime){return waitTime>0?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this));}/**
       * Cancels an async operation started with `async`.
       *
       * @param {number} handle Handle returned from original `async` call to
       *   cancel.
       * @return {void}
       */},{key:"cancelAsync",value:function cancelAsync(handle){handle<0?microTask.cancel(~handle):timeOut.cancel(handle);}// other
/**
       * Convenience method for creating an element and configuring it.
       *
       * @param {string} tag HTML element tag to create.
       * @param {Object=} props Object of properties to configure on the
       *    instance.
       * @return {!Element} Newly created and configured element.
       */},{key:"create",value:function create(tag,props){var elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props);}else{for(var n in props){elt[n]=props[n];}}}return elt;}/**
       * Polyfill for Element.prototype.matches, which is sometimes still
       * prefixed.
       *
       * @param {string} selector Selector to test.
       * @param {!Element=} node Element to test the selector against.
       * @return {boolean} Whether the element matches the selector.
       */},{key:"elementMatches",value:function elementMatches(selector,node){return matchesSelector(node||this,selector);}/**
       * Toggles an HTML attribute on or off.
       *
       * @param {string} name HTML attribute name
       * @param {boolean=} bool Boolean to force the attribute on or off.
       *    When unspecified, the state of the attribute will be reversed.
       * @return {boolean} true if the attribute now exists
       */},{key:"toggleAttribute",value:function toggleAttribute(name,bool){var node=/** @type {Element} */this;if(arguments.length===3){node=/** @type {Element} */arguments[2];}if(arguments.length==1){bool=!node.hasAttribute(name);}if(bool){node.setAttribute(name,'');return true;}else{node.removeAttribute(name);return false;}}/**
       * Toggles a CSS class on or off.
       *
       * @param {string} name CSS class name
       * @param {boolean=} bool Boolean to force the class on or off.
       *    When unspecified, the state of the class will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       */},{key:"toggleClass",value:function toggleClass(name,bool,node){node=/** @type {Element} */node||this;if(arguments.length==1){bool=!node.classList.contains(name);}if(bool){node.classList.add(name);}else{node.classList.remove(name);}}/**
       * Cross-platform helper for setting an element's CSS `transform` property.
       *
       * @param {string} transformText Transform setting.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`
       * @return {void}
       */},{key:"transform",value:function transform(transformText,node){node=/** @type {Element} */node||this;node.style.webkitTransform=transformText;node.style.transform=transformText;}/**
       * Cross-platform helper for setting an element's CSS `translate3d`
       * property.
       *
       * @param {number} x X offset.
       * @param {number} y Y offset.
       * @param {number} z Z offset.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`.
       * @return {void}
       */},{key:"translate3d",value:function translate3d(x,y,z,node){node=/** @type {Element} */node||this;this.transform('translate3d('+x+','+y+','+z+')',node);}/**
       * Removes an item from an array, if it exists.
       *
       * If the array is specified by path, a change notification is
       * generated, so that observers, data bindings and computed
       * properties watching that path can update.
       *
       * If the array is passed directly, **no change
       * notification is generated**.
       *
       * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
       *   (or the array itself).
       * @param {*} item Item to remove.
       * @return {Array} Array containing item removed.
       */},{key:"arrayDelete",value:function arrayDelete(arrayOrPath,item){var index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(index>=0){return arrayOrPath.splice(index,1);}}else{var arr=_get2(this,arrayOrPath);index=arr.indexOf(item);if(index>=0){return this.splice(arrayOrPath,index,1);}}return null;}// logging
/**
       * Facades `console.log`/`warn`/`error` as override point.
       *
       * @param {string} level One of 'log', 'warn', 'error'
       * @param {Array} args Array of strings or objects to log
       * @return {void}
       */},{key:"_logger",value:function _logger(level,args){var _console;// accept ['foo', 'bar'] and [['foo', 'bar']]
if(Array.isArray(args)&&args.length===1&&Array.isArray(args[0])){args=args[0];}switch(level){case'log':case'warn':case'error':(_console=console)[level].apply(_console,_toConsumableArray(args));}}/**
       * Facades `console.log` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_log",value:function _log(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}this._logger('log',args);}/**
       * Facades `console.warn` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_warn",value:function _warn(){for(var _len5=arguments.length,args=new Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}this._logger('warn',args);}/**
       * Facades `console.error` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_error",value:function _error(){for(var _len6=arguments.length,args=new Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6];}this._logger('error',args);}/**
       * Formats a message using the element type an a method name.
       *
       * @param {string} methodName Method name to associate with message
       * @param {...*} args Array of strings or objects to log
       * @return {Array} Array with formatting information for `console`
       *   logging.
       */},{key:"_logf",value:function _logf(methodName){for(var _len7=arguments.length,args=new Array(_len7>1?_len7-1:0),_key7=1;_key7<_len7;_key7++){args[_key7-1]=arguments[_key7];}return['[%s::%s]',this.is,methodName].concat(args);}},{key:"domHost",get:function get(){var root$$1=this.getRootNode();return _instanceof(root$$1,DocumentFragment)?/** @type {ShadowRoot} */root$$1.host:root$$1;}}],[{key:"importMeta",get:function get(){return this.prototype.importMeta;}}]);return LegacyElement;}(legacyElementBase);LegacyElement.prototype.is='';return LegacyElement;});/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var metaProps={attached:true,detached:true,ready:true,created:true,beforeRegister:true,registered:true,attributeChanged:true,// meta objects
behaviors:true};/**
   * Applies a "legacy" behavior or array of behaviors to the provided class.
   *
   * Note: this method will automatically also apply the `LegacyElementMixin`
   * to ensure that any legacy behaviors can rely on legacy Polymer API on
   * the underlying element.
   *
   * @function
   * @template T
   * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
   * @param {function(new:T)} klass Element class.
   * @return {?} Returns a new Element class extended by the
   * passed in `behaviors` and also by `LegacyElementMixin`.
   * @suppress {invalidCasts, checkTypes}
   */function mixinBehaviors(behaviors,klass){if(!behaviors){klass=/** @type {HTMLElement} */klass;// eslint-disable-line no-self-assign
return klass;}// NOTE: ensure the behavior is extending a class with
// legacy element api. This is necessary since behaviors expect to be able
// to access 1.x legacy api.
klass=LegacyElementMixin(klass);if(!Array.isArray(behaviors)){behaviors=[behaviors];}var superBehaviors=klass.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
behaviors=flattenBehaviors(behaviors,null,superBehaviors);// mixin new behaviors
klass=_mixinBehaviors(behaviors,klass);if(superBehaviors){behaviors=superBehaviors.concat(behaviors);}// Set behaviors on prototype for BC...
klass.prototype.behaviors=behaviors;return klass;}// NOTE:
// 1.x
// Behaviors were mixed in *in reverse order* and de-duped on the fly.
// The rule was that behavior properties were copied onto the element
// prototype if and only if the property did not already exist.
// Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
// (1), B, (2), A, (3) C. This means prototype properties win over
// B properties win over A win over C. This mirrors what would happen
// with inheritance if element extended B extended A extended C.
//
// Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
// `behaviors` array was [C, A, B].
// Behavior lifecycle methods were called in behavior array order
// followed by the element, e.g. (1) C.created, (2) A.created,
// (3) B.created, (4) element.created. There was no support for
// super, and "super-behavior" methods were callable only by name).
//
// 2.x
// Behaviors are made into proper mixins which live in the
// element's prototype chain. Behaviors are placed in the element prototype
// eldest to youngest and de-duped youngest to oldest:
// So, first [A, B, C, A, B] becomes [C, A, B] then,
// the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
// (3) class(A), (4) class(B), (5) class(Polymer({...})).
// Result:
// This means element properties win over B properties win over A win
// over C. (same as 1.x)
// If lifecycle is called (super then me), order is
// (1) C.created, (2) A.created, (3) B.created, (4) element.created
// (again same as 1.x)
function _mixinBehaviors(behaviors,klass){for(var _i47=0;_i47<behaviors.length;_i47++){var b=behaviors[_i47];if(b){klass=Array.isArray(b)?_mixinBehaviors(b,klass):GenerateClassFromInfo(b,klass);}}return klass;}/**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */function flattenBehaviors(behaviors,list,exclude){list=list||[];for(var _i48=behaviors.length-1;_i48>=0;_i48--){var b=behaviors[_i48];if(b){if(Array.isArray(b)){flattenBehaviors(b,list);}else{// dedup
if(list.indexOf(b)<0&&(!exclude||exclude.indexOf(b)<0)){list.unshift(b);}}}else{console.warn('behavior is null, check for missing or 404 import');}}return list;}/**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */function GenerateClassFromInfo(info,Base){/** @private */var PolymerGenerated=/*#__PURE__*/function(_Base){_inherits(PolymerGenerated,_Base);function PolymerGenerated(){_classCallCheck(this,PolymerGenerated);return _possibleConstructorReturn(this,_getPrototypeOf(PolymerGenerated).apply(this,arguments));}_createClass(PolymerGenerated,[{key:"created",/**
       * @return {void}
       */value:function created(){_get(_getPrototypeOf(PolymerGenerated.prototype),"created",this).call(this);if(info.created){info.created.call(this);}}/**
       * @return {void}
       */},{key:"_registered",value:function _registered(){_get(_getPrototypeOf(PolymerGenerated.prototype),"_registered",this).call(this);/* NOTE: `beforeRegister` is called here for bc, but the behavior
         is different than in 1.x. In 1.0, the method was called *after*
         mixing prototypes together but *before* processing of meta-objects.
         However, dynamic effects can still be set here and can be done either
         in `beforeRegister` or `registered`. It is no longer possible to set
         `is` in `beforeRegister` as you could in 1.x.
        */if(info.beforeRegister){info.beforeRegister.call(Object.getPrototypeOf(this));}if(info.registered){info.registered.call(Object.getPrototypeOf(this));}}/**
       * @return {void}
       */},{key:"_applyListeners",value:function _applyListeners(){_get(_getPrototypeOf(PolymerGenerated.prototype),"_applyListeners",this).call(this);if(info.listeners){for(var l in info.listeners){this._addMethodEventListenerToNode(this,l,info.listeners[l]);}}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
       * @return {void}
       */},{key:"_ensureAttributes",value:function _ensureAttributes(){if(info.hostAttributes){for(var a in info.hostAttributes){this._ensureAttribute(a,info.hostAttributes[a]);}}_get(_getPrototypeOf(PolymerGenerated.prototype),"_ensureAttributes",this).call(this);}/**
       * @return {void}
       */},{key:"ready",value:function ready(){_get(_getPrototypeOf(PolymerGenerated.prototype),"ready",this).call(this);if(info.ready){info.ready.call(this);}}/**
       * @return {void}
       */},{key:"attached",value:function attached(){_get(_getPrototypeOf(PolymerGenerated.prototype),"attached",this).call(this);if(info.attached){info.attached.call(this);}}/**
       * @return {void}
       */},{key:"detached",value:function detached(){_get(_getPrototypeOf(PolymerGenerated.prototype),"detached",this).call(this);if(info.detached){info.detached.call(this);}}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){_get(_getPrototypeOf(PolymerGenerated.prototype),"attributeChanged",this).call(this,name,old,value);if(info.attributeChanged){info.attributeChanged.call(this,name,old,value);}}}],[{key:"properties",get:function get(){return info.properties;}},{key:"observers",get:function get(){return info.observers;}}]);return PolymerGenerated;}(Base);PolymerGenerated.generatedFrom=info;for(var _p13 in info){// NOTE: cannot copy `metaProps` methods onto prototype at least because
// `super.ready` must be called and is not included in the user fn.
if(!(_p13 in metaProps)){var pd=Object.getOwnPropertyDescriptor(info,_p13);if(pd){Object.defineProperty(PolymerGenerated.prototype,_p13,pd);}}}return PolymerGenerated;}/**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @template T
   * @param {function(T):T} mixin Optional mixin to apply to legacy base class
   *   before extending with Polymer metaprogramming.
   * @return {function(new:HTMLElement)} Generated class
   */var Class=function Class(info,mixin){if(!info){console.warn("Polymer's Class function requires `info` argument");}var baseWithBehaviors=info.behaviors?// note: mixinBehaviors ensures `LegacyElementMixin`.
mixinBehaviors(info.behaviors,HTMLElement):LegacyElementMixin(HTMLElement);var baseWithMixin=mixin?mixin(baseWithBehaviors):baseWithBehaviors;var klass=GenerateClassFromInfo(info,baseWithMixin);// decorate klass with registration info
klass.is=info.is;return klass;};/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Legacy class factory and registration helper for defining Polymer
   * elements.
   *
   * This method is equivalent to
   *
   *     import {Class} from '@polymer/polymer/lib/legacy/class.js';
   *     customElements.define(info.is, Class(info));
   *
   * See `Class` for details on valid legacy metadata format for `info`.
   *
   * @global
   * @override
   * @function
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new: HTMLElement)} Generated class
   * @suppress {duplicate, invalidCasts, checkTypes}
   */var Polymer=function Polymer(info){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
var klass;if(typeof info==='function'){klass=info;}else{klass=Polymer.Class(info);}customElements.define(klass.is,/** @type {!HTMLElement} */klass);return klass;};Polymer.Class=Class;/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // Common implementation for mixin & behavior
function mutablePropertyChange(inst,property,value,old,mutableData){var isObject;if(mutableData){isObject=_typeof(value)==='object'&&value!==null;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property];}}// Strict equality check, but return false for NaN===NaN
var shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value;}return shouldChange;}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */var MutableData=dedupingMixin(function(superClass){/**
     * @polymer
     * @mixinClass
     * @implements {Polymer_MutableData}
     */var MutableData=/*#__PURE__*/function(_superClass4){_inherits(MutableData,_superClass4);function MutableData(){_classCallCheck(this,MutableData);return _possibleConstructorReturn(this,_getPrototypeOf(MutableData).apply(this,arguments));}_createClass(MutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * This method pulls the value to dirty check against from the `__dataTemp`
       * cache (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,true);}}]);return MutableData;}(superClass);return MutableData;});/**
   * Element class mixin to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must enable this mixin or apply the
   * `MutableData` mixin.
   *
   * While this mixin adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to optionally skip strict dirty-checking
   *   for objects and arrays
   */var OptionalMutableData=dedupingMixin(function(superClass){/**
     * @mixinClass
     * @polymer
     * @implements {Polymer_OptionalMutableData}
     */var OptionalMutableData=/*#__PURE__*/function(_superClass5){_inherits(OptionalMutableData,_superClass5);function OptionalMutableData(){_classCallCheck(this,OptionalMutableData);return _possibleConstructorReturn(this,_getPrototypeOf(OptionalMutableData).apply(this,arguments));}_createClass(OptionalMutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData);}}],[{key:"properties",get:function get(){return{/**
           * Instance-level flag for configuring the dirty-checking strategy
           * for this element.  When true, Objects and Arrays will skip dirty
           * checking, otherwise strict equality checking will be used.
           */mutableData:Boolean};}}]);return OptionalMutableData;}(superClass);return OptionalMutableData;});// Export for use by legacy behavior
MutableData._mutablePropertyChange=mutablePropertyChange;/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // Base class for HTMLTemplateElement extension that has property effects
// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
var newInstance=null;/**
   * @constructor
   * @extends {HTMLTemplateElement}
   * @private
   */function HTMLTemplateElementExtension(){return newInstance;}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:true}});/**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @extends {HTMLTemplateElementExtension}
   * @private
   */var DataTemplate=PropertyEffects(HTMLTemplateElementExtension);/**
   * @constructor
   * @implements {Polymer_MutableData}
   * @extends {DataTemplate}
   * @private
   */var MutableDataTemplate=MutableData(DataTemplate);// Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor();newInstance=null;}/**
   * Base class for TemplateInstance.
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @private
   */var base=PropertyEffects(/*#__PURE__*/function(){function _class(){_classCallCheck(this,_class);}return _class;}());/**
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @unrestricted
   */var TemplateInstanceBase=/*#__PURE__*/function(_base3){_inherits(TemplateInstanceBase,_base3);function TemplateInstanceBase(props){var _this18;_classCallCheck(this,TemplateInstanceBase);_this18=_possibleConstructorReturn(this,_getPrototypeOf(TemplateInstanceBase).call(this));_this18._configureProperties(props);_this18.root=_this18._stampTemplate(_this18.__dataHost);// Save list of stamped children
var children=_this18.children=[];for(var n=_this18.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=_assertThisInitialized(_assertThisInitialized(_this18));}if(_this18.__templatizeOwner&&_this18.__templatizeOwner.__hideTemplateChildren__){_this18._showHideChildren(true);}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
var options=_this18.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){_this18._enableProperties();}return _this18;}/**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */_createClass(TemplateInstanceBase,[{key:"_configureProperties",value:function _configureProperties(props){var options=this.__templatizeOptions;if(options.forwardHostProp){for(var hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost['_host_'+hprop]);}}// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(var iprop in props){this._setPendingProperty(iprop,props[iprop]);}}/**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */},{key:"forwardHostProp",value:function forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,false,true)){this.__dataHost._enqueueClient(this);}}/**
     * Override point for adding custom or simulated event handling.
     *
     * @override
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){var _this19=this;if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,function(e){e.model=_this19;handler(e);});}else{// Otherwise delegate to the template's host (which could be)
// another template instance
var templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler);}}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */},{key:"_showHideChildren",value:function _showHideChildren(hide){var c=this.children;for(var _i49=0;_i49<c.length;_i49++){var n=c[_i49];// Ignore non-changes
if(Boolean(hide)!=Boolean(n.__hideTemplateChildren__)){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent='';}else{n.textContent=n.__polymerTextContent__;}// remove and replace slot
}else if(n.localName==='slot'){if(hide){n.__polymerReplaced__=document.createComment('hidden-slot');n.parentNode.replaceChild(n.__polymerReplaced__,n);}else{var replace=n.__polymerReplaced__;if(replace){replace.parentNode.replaceChild(n,replace);}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display='none';}else{n.style.display=n.__polymerDisplay__;}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide);}}}/**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&prop=='textContent'){node.__polymerTextContent__=value;}else{_get(_getPrototypeOf(TemplateInstanceBase.prototype),"_setUnmanagedPropertyToNode",this).call(this,node,prop,value);}}/**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */},{key:"dispatchEvent",/**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     * @return {boolean} Always true.
     */value:function dispatchEvent(event){// eslint-disable-line no-unused-vars
return true;}},{key:"parentModel",get:function get(){var model=this.__parentModel;if(!model){var options;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost;}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model;}return model;}}]);return TemplateInstanceBase;}(base);/** @type {!DataTemplate} */TemplateInstanceBase.prototype.__dataHost;/** @type {!TemplatizeOptions} */TemplateInstanceBase.prototype.__templatizeOptions;/** @type {!Polymer_PropertyEffects} */TemplateInstanceBase.prototype._methodHost;/** @type {!Object} */TemplateInstanceBase.prototype.__templatizeOwner;/** @type {!Object} */TemplateInstanceBase.prototype.__hostProps;/**
   * @constructor
   * @extends {TemplateInstanceBase}
   * @implements {Polymer_MutableData}
   * @private
   */var MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
var templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost;}/* eslint-disable valid-jsdoc */ /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function createTemplatizerClass(template,templateInfo,options){// Anonymous class created by the templatize
var base=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;/**
     * @constructor
     * @extends {base}
     * @private
     */var klass=/*#__PURE__*/function(_base4){_inherits(klass,_base4);function klass(){_classCallCheck(this,klass);return _possibleConstructorReturn(this,_getPrototypeOf(klass).apply(this,arguments));}return klass;}(base);klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass;}/**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function addPropagateEffects(template,templateInfo,options){var userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){// Provide data API and property effects on memoized template class
var klass=templateInfo.templatizeTemplateClass;if(!klass){var _base5=options.mutableData?MutableDataTemplate:DataTemplate;/** @private */klass=templateInfo.templatizeTemplateClass=/*#__PURE__*/function(_base6){_inherits(TemplatizedTemplate,_base6);function TemplatizedTemplate(){_classCallCheck(this,TemplatizedTemplate);return _possibleConstructorReturn(this,_getPrototypeOf(TemplatizedTemplate).apply(this,arguments));}return TemplatizedTemplate;}(_base5);// Add template - >instances effects
// and host <- template effects
var hostProps=templateInfo.hostProps;for(var prop in hostProps){klass.prototype._addPropertyEffect('_host_'+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty('_host_'+prop);}}upgradeTemplate(template,klass);// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(template.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(template.__data,template.__dataProto);}// Clear any pending data for performance
template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties();}}/* eslint-enable valid-jsdoc */function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring('_host_'.length),props[prop]);};}function addNotifyEffects(klass,template,templateInfo,options){var hostProps=templateInfo.hostProps||{};for(var iprop in options.instanceProps){delete hostProps[iprop];var userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)});}}if(options.forwardHostProp&&template.__dataHost){for(var hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()});}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop]);};}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath('_host_'+prop,props[prop],true,true);};}/**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */function templatize(template,owner,options){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error('strictTemplatePolicy: template owner not trusted');}options=/** @type {!TemplatizeOptions} */options||{};if(template.__templatizeOwner){throw new Error('A <template> can only be templatized once');}template.__templatizeOwner=owner;var ctor=owner?owner.constructor:TemplateInstanceBase;var templateInfo=ctor._parseTemplate(template);// Get memoized base class for the prototypical template, which
// includes property effects for binding template & forwarding
var baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass;}// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options);// Subclass base class and add reference for this specific template
/** @private */var klass=/*#__PURE__*/function(_baseClass){_inherits(TemplateInstance,_baseClass);function TemplateInstance(){_classCallCheck(this,TemplateInstance);return _possibleConstructorReturn(this,_getPrototypeOf(TemplateInstance).apply(this,arguments));}return TemplateInstance;}(baseClass);klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=/** @type {function(new:TemplateInstanceBase)} */klass;//eslint-disable-line no-self-assign
return klass;}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */function _modelForElement(template,node){var model;while(node){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=node.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){node=model.__dataHost;}else{return model;}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
node=node.parentNode;}}return null;}/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_OptionalMutableData}
   * @implements {Polymer_GestureEventListeners}
   * @private
   */var domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));/**
   * Custom element to allow using Polymer's template features (data binding,
   * declarative event listeners, etc.) in the main document without defining
   * a new custom element.
   *
   * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
   * element, which will immediately stamp the wrapped template into the main
   * document and bind elements to the `dom-bind` element itself as the
   * binding scope.
   *
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @appliesMixin OptionalMutableData
   * @appliesMixin GestureEventListeners
   * @extends {domBindBase}
   * @summary Custom element to allow using Polymer's template features (data
   *   binding, declarative event listeners, etc.) in the main document.
   */var DomBind=/*#__PURE__*/function(_domBindBase){_inherits(DomBind,_domBindBase);_createClass(DomBind,null,[{key:"observedAttributes",get:function get(){return['mutable-data'];}}]);function DomBind(){var _this20;_classCallCheck(this,DomBind);_this20=_possibleConstructorReturn(this,_getPrototypeOf(DomBind).call(this));if(strictTemplatePolicy){throw new Error("strictTemplatePolicy: dom-bind not allowed");}_this20.root=null;_this20.$=null;_this20.__children=null;return _this20;}/**
     * @override
     * @return {void}
     */_createClass(DomBind,[{key:"attributeChangedCallback",value:function attributeChangedCallback(){// assumes only one observed attribute
this.mutableData=true;}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){this.style.display='none';this.render();}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){this.__removeChildren();}},{key:"__insertChildren",value:function __insertChildren(){this.parentNode.insertBefore(this.root,this);}},{key:"__removeChildren",value:function __removeChildren(){if(this.__children){for(var _i50=0;_i50<this.__children.length;_i50++){this.root.appendChild(this.__children[_i50]);}}}/**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */},{key:"render",value:function render(){var _this21=this;var template;if(!this.__children){template=/** @type {HTMLTemplateElement} */template||this.querySelector('template');if(!template){// Wait until childList changes and template should be there by then
var _observer=new MutationObserver(function(){template=/** @type {HTMLTemplateElement} */_this21.querySelector('template');if(template){_observer.disconnect();_this21.render();}else{throw new Error('dom-bind requires a <template> child');}});_observer.observe(this,{childList:true});return;}this.root=this._stampTemplate(/** @type {!HTMLTemplateElement} */template);this.$=this.root.$;this.__children=[];for(var n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n;}this._enableProperties();}this.__insertChildren();this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));}}]);return DomBind;}(domBindBase);customElements.define('dom-bind',DomBind);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Class representing a static string value which can be used to filter
   * strings by asseting that they have been created via this class. The
   * `value` property returns the string passed to the constructor.
   */var LiteralString=/*#__PURE__*/function(){function LiteralString(string){_classCallCheck(this,LiteralString);/** @type {string} */this.value=string.toString();}/**
     * @return {string} LiteralString string value
     * @override
     */_createClass(LiteralString,[{key:"toString",value:function toString(){return this.value;}}]);return LiteralString;}();/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function literalValue(value){if(_instanceof(value,LiteralString)){return(/** @type {!LiteralString} */value.value);}else{throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value));}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function htmlValue(value){if(_instanceof(value,HTMLTemplateElement)){return(/** @type {!HTMLTemplateElement } */value.innerHTML);}else if(_instanceof(value,LiteralString)){return literalValue(value);}else{throw new Error("non-template value passed to Polymer's html function: ".concat(value));}}/**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */var html=function html(strings){var template=/** @type {!HTMLTemplateElement} */document.createElement('template');for(var _len8=arguments.length,values=new Array(_len8>1?_len8-1:0),_key8=1;_key8<_len8;_key8++){values[_key8-1]=arguments[_key8];}template.innerHTML=values.reduce(function(acc,v,idx){return acc+htmlValue(v)+strings[idx+1];},strings[0]);return template;};/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * @customElement
   * @polymer
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends HTMLElement
   * @appliesMixin ElementMixin
   * @summary Custom element base class that provides the core API for Polymer's
   *   key meta-programming features including template stamping, data-binding,
   *   attribute deserialization, and property change observation
   */var PolymerElement=ElementMixin(HTMLElement);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @constructor
   * @implements {Polymer_OptionalMutableData}
   * @extends {PolymerElement}
   * @private
   */var domRepeatBase=OptionalMutableData(PolymerElement);/**
   * The `<dom-repeat>` element will automatically stamp and binds one instance
   * of template content to each object in a user-provided array.
   * `dom-repeat` accepts an `items` property, and one instance of the template
   * is stamped for each item into the DOM at the location of the `dom-repeat`
   * element.  The `item` property will be set on each instance's binding
   * scope, thus templates should bind to sub-properties of `item`.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <dom-repeat items="{{employees}}">
   *       <template>
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *       </template>
   *     </dom-repeat>
   *
   *   </template>
   *
   * </dom-module>
   * ```
   *
   * With the following custom element definition:
   *
   * ```js
   * class EmployeeList extends PolymerElement {
   *   static get is() { return 'employee-list'; }
   *   static get properties() {
   *     return {
   *       employees: {
   *         value() {
   *           return [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *           ];
   *         }
   *       }
   *     };
   *   }
   * }
   * ```
   *
   * Notifications for changes to items sub-properties will be forwarded to template
   * instances, which will update via the normal structured data notification system.
   *
   * Mutations to the `items` array itself should be made using the Array
   * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
   * `shift`, `unshift`), and template instances will be kept in sync with the
   * data in the array.
   *
   * Events caught by event handlers within the `dom-repeat` template will be
   * decorated with a `model` property, which represents the binding scope for
   * each template instance.  The model should be used to manipulate data on the
   * instance, for example `event.model.set('item.checked', true);`.
   *
   * Alternatively, the model for a template instance for an element stamped by
   * a `dom-repeat` can be obtained using the `modelForElement` API on the
   * `dom-repeat` that stamped it, for example
   * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
   * This may be useful for manipulating instance data of event targets obtained
   * by event handlers on parents of the `dom-repeat` (event delegation).
   *
   * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
   * `filter` and/or `sort` property.  This may be a string that names a function on
   * the host, or a function may be assigned to the property directly.  The functions
   * should implemented following the standard `Array` filter/sort API.
   *
   * In order to re-run the filter or sort functions based on changes to sub-fields
   * of `items`, the `observe` property may be set as a space-separated list of
   * `item` sub-fields that should cause a re-filter/sort when modified.  If
   * the filter or sort function depends on properties not contained in `items`,
   * the user should observe changes to those properties and call `render` to update
   * the view based on the dependency change.
   *
   * For example, for an `dom-repeat` with a filter of the following:
   *
   * ```js
   * isEngineer(item) {
   *   return item.type == 'engineer' || item.manager.type == 'engineer';
   * }
   * ```
   *
   * Then the `observe` property should be configured as follows:
   *
   * ```html
   * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
   * ```
   *
   * @customElement
   * @polymer
   * @extends {domRepeatBase}
   * @appliesMixin OptionalMutableData
   * @summary Custom element for stamping instance of a template bound to
   *   items in an array.
   */var DomRepeat=/*#__PURE__*/function(_domRepeatBase){_inherits(DomRepeat,_domRepeatBase);_createClass(DomRepeat,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'dom-repeat';}},{key:"template",get:function get(){return null;}},{key:"properties",get:function get(){/**
       * Fired whenever DOM is added or removed by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */return{/**
         * An array containing items determining how many instances of the template
         * to stamp and that that each template instance should bind to.
         */items:{type:Array},/**
         * The name of the variable to add to the binding scope for the array
         * element associated with a given template instance.
         */as:{type:String,value:'item'},/**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the sorted and filtered list of rendered items.
         * Note, for the index in the `this.items` array, use the value of the
         * `itemsIndexAs` property.
         */indexAs:{type:String,value:'index'},/**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the `this.items` array. Note, for the index of
         * this instance in the sorted and filtered list of rendered items,
         * use the value of the `indexAs` property.
         */itemsIndexAs:{type:String,value:'itemsIndex'},/**
         * A function that should determine the sort order of the items.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.sort`.
         * Using a sort function has no effect on the underlying `items` array.
         */sort:{type:Function,observer:'__sortChanged'},/**
         * A function that can be used to filter items out of the view.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.filter`.
         * Using a filter function has no effect on the underlying `items` array.
         */filter:{type:Function,observer:'__filterChanged'},/**
         * When using a `filter` or `sort` function, the `observe` property
         * should be set to a space-separated list of the names of item
         * sub-fields that should trigger a re-sort or re-filter when changed.
         * These should generally be fields of `item` that the sort or filter
         * function depends on.
         */observe:{type:String,observer:'__observeChanged'},/**
         * When using a `filter` or `sort` function, the `delay` property
         * determines a debounce time in ms after a change to observed item
         * properties that must pass before the filter or sort is re-run.
         * This is useful in rate-limiting shuffling of the view when
         * item changes may be frequent.
         */delay:Number,/**
         * Count of currently rendered items after `filter` (if any) has been applied.
         * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
         * set of template instances is rendered.
         *
         */renderedItemCount:{type:Number,notify:true,readOnly:true},/**
         * Defines an initial count of template instances to render after setting
         * the `items` array, before the next paint, and puts the `dom-repeat`
         * into "chunking mode".  The remaining items will be created and rendered
         * incrementally at each animation frame therof until all instances have
         * been rendered.
         */initialCount:{type:Number,observer:'__initializeChunking'},/**
         * When `initialCount` is used, this property defines a frame rate (in
         * fps) to target by throttling the number of instances rendered each
         * frame to not exceed the budget for the target frame rate.  The
         * framerate is effectively the number of `requestAnimationFrame`s that
         * it tries to allow to actually fire in a given second. It does this
         * by measuring the time between `rAF`s and continuously adjusting the
         * number of items created each `rAF` to maintain the target framerate.
         * Setting this to a higher number allows lower latency and higher
         * throughput for event handlers and other tasks, but results in a
         * longer time for the remaining items to complete rendering.
         */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:'__computeFrameTime(targetFramerate)'}};}},{key:"observers",get:function get(){return['__itemsChanged(items.*)'];}}]);function DomRepeat(){var _this22;_classCallCheck(this,DomRepeat);_this22=_possibleConstructorReturn(this,_getPrototypeOf(DomRepeat).call(this));_this22.__instances=[];_this22.__limit=Infinity;_this22.__pool=[];_this22.__renderDebouncer=null;_this22.__itemsIdxToInstIdx={};_this22.__chunkCount=null;_this22.__lastChunkTime=null;_this22.__sortFn=null;_this22.__filterFn=null;_this22.__observePaths=null;/** @type {?function(new:Polymer.TemplateInstanceBase, *)} */_this22.__ctor=null;_this22.__isDetached=true;_this22.template=null;return _this22;}/**
     * @override
     * @return {void}
     */_createClass(DomRepeat,[{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(DomRepeat.prototype),"disconnectedCallback",this).call(this);this.__isDetached=true;for(var _i51=0;_i51<this.__instances.length;_i51++){this.__detachInstance(_i51);}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(DomRepeat.prototype),"connectedCallback",this).call(this);this.style.display='none';// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=false;var parent=this.parentNode;for(var _i52=0;_i52<this.__instances.length;_i52++){this.__attachInstance(_i52,parent);}}}},{key:"__ensureTemplatized",value:function __ensureTemplatized(){var _this23=this;// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){var _template2=this.template=/** @type {HTMLTemplateElement} */this.querySelector('template');if(!_template2){// // Wait until childList changes and template should be there by then
var _observer2=new MutationObserver(function(){if(_this23.querySelector('template')){_observer2.disconnect();_this23.__render();}else{throw new Error('dom-repeat requires a <template> child');}});_observer2.observe(this,{childList:true});return false;}// Template instance props that should be excluded from forwarding
var instanceProps={};instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.itemsIndexAs]=true;this.__ctor=templatize(_template2,this,{mutableData:this.mutableData,parentModel:true,instanceProps:instanceProps,/**
           * @this {DomRepeat}
           * @param {string} prop Property to set
           * @param {*} value Value to set property to
           */forwardHostProp:function forwardHostProp(prop,value){var i$=this.__instances;for(var _i53=0,inst;_i53<i$.length&&(inst=i$[_i53]);_i53++){inst.forwardHostProp(prop,value);}},/**
           * @this {DomRepeat}
           * @param {Object} inst Instance to notify
           * @param {string} prop Property to notify
           * @param {*} value Value to notify
           */notifyInstanceProp:function notifyInstanceProp(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value;}var path=translate(this.as,'items.'+idx,prop);this.notifyPath(path,value);}}});}return true;}},{key:"__getMethodHost",value:function __getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost;}},{key:"__functionFromPropertyValue",value:function __functionFromPropertyValue(functionOrMethodName){if(typeof functionOrMethodName==='string'){var methodName=functionOrMethodName;var obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments);};}return functionOrMethodName;}},{key:"__sortChanged",value:function __sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render);}}},{key:"__filterChanged",value:function __filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render);}}},{key:"__computeFrameTime",value:function __computeFrameTime(rate){return Math.ceil(1000/rate);}},{key:"__initializeChunking",value:function __initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now();}}},{key:"__tryRenderChunk",value:function __tryRenderChunk(){// Debounced so that multiple calls through `_render` between animation
// frames only queue one new rAF (e.g. array mutation & chunked render)
if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk);}}},{key:"__requestRenderChunk",value:function __requestRenderChunk(){var _this24=this;requestAnimationFrame(function(){return _this24.__renderChunk();});}},{key:"__renderChunk",value:function __renderChunk(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio
// of target/actual frame time
var currChunkTime=performance.now();var ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render);}},{key:"__observeChanged",value:function __observeChanged(){this.__observePaths=this.observe&&this.observe.replace('.*','.').split(' ');}},{key:"__itemsChanged",value:function __itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn('dom-repeat expected array for `items`, found',this.items);}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (returns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a full refresh
this.__initializeChunking();this.__debounceRender(this.__render);}}},{key:"__handleObservedPaths",value:function __handleObservedPaths(path){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(!path){// Always re-render if the item itself changed
this.__debounceRender(this.__render,this.delay);}else if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
var paths=this.__observePaths;for(var _i54=0;_i54<paths.length;_i54++){if(path.indexOf(paths[_i54])===0){this.__debounceRender(this.__render,this.delay);}}}}}/**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */},{key:"__debounceRender",value:function __debounceRender(fn){var delay=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,delay>0?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer);}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render);flush$1();}},{key:"__render",value:function __render(){if(!this.__ensureTemplatized()){// No template found yet
return;}this.__applyFullRefresh();// Reset the pool
// TODO(kschaaf): Reuse pool across turns and nested templates
// Now that objects/arrays are re-evaluated when set, we can safely
// reuse pooled instances across turns, however we still need to decide
// semantics regarding how long to hold, how many to hold, etc.
this.__pool.length=0;// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));// Check to see if we need to render more items
this.__tryRenderChunk();}},{key:"__applyFullRefresh",value:function __applyFullRefresh(){var _this25=this;var items=this.items||[];var isntIdxToItemsIdx=new Array(items.length);for(var _i55=0;_i55<items.length;_i55++){isntIdxToItemsIdx[_i55]=_i55;}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter(function(i,idx,array){return _this25.__filterFn(items[i],idx,array);});}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort(function(a,b){return _this25.__sortFn(items[a],items[b]);});}// items->inst map kept for item path forwarding
var itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};var instIdx=0;// Generate instances and assign items
var limit=Math.min(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){var inst=this.__instances[instIdx];var itemIdx=isntIdxToItemsIdx[instIdx];var item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{this.__insertInstance(item,instIdx,itemIdx);}}// Remove any extra instances from previous state
for(var _i56=this.__instances.length-1;_i56>=instIdx;_i56--){this.__detachAndRemoveInstance(_i56);}}},{key:"__detachInstance",value:function __detachInstance(idx){var inst=this.__instances[idx];for(var _i57=0;_i57<inst.children.length;_i57++){var el=inst.children[_i57];inst.root.appendChild(el);}return inst;}},{key:"__attachInstance",value:function __attachInstance(idx,parent){var inst=this.__instances[idx];parent.insertBefore(inst.root,this);}},{key:"__detachAndRemoveInstance",value:function __detachAndRemoveInstance(idx){var inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst);}this.__instances.splice(idx,1);}},{key:"__stampInstance",value:function __stampInstance(item,instIdx,itemIdx){var model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model);}},{key:"__insertInstance",value:function __insertInstance(item,instIdx,itemIdx){var inst=this.__pool.pop();if(inst){// TODO(kschaaf): If the pool is shared across turns, hostProps
// need to be re-set to reused instances in addition to item
inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{inst=this.__stampInstance(item,instIdx,itemIdx);}var beforeRow=this.__instances[instIdx+1];var beforeNode=beforeRow?beforeRow.children[0]:this;this.parentNode.insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst;}// Implements extension point from Templatize mixin
/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hidden Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */},{key:"_showHideChildren",value:function _showHideChildren(hidden){for(var _i58=0;_i58<this.__instances.length;_i58++){this.__instances[_i58]._showHideChildren(hidden);}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
},{key:"__handleItemPath",value:function __handleItemPath(path,value){var itemsPath=path.slice(6);// 'items.'.length == 6
var dot=itemsPath.indexOf('.');var itemsIdx=dot<0?itemsPath:itemsPath.substring(0,dot);// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){var itemSubPath=dot<0?'':itemsPath.substring(dot+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(itemSubPath);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
var instIdx=this.__itemsIdxToInstIdx[itemsIdx];var inst=this.__instances[instIdx];if(inst){var itemPath=this.as+(itemSubPath?'.'+itemSubPath:'');// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,false,true);inst._flushProperties();}return true;}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */},{key:"itemForElement",value:function itemForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.as];}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */},{key:"indexForElement",value:function indexForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.indexAs];}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */},{key:"modelForElement",value:function modelForElement(el){return _modelForElement(this.template,el);}}]);return DomRepeat;}(domRepeatBase);customElements.define(DomRepeat.is,DomRepeat);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * The `<dom-if>` element will stamp a light-dom `<template>` child when
   * the `if` property becomes truthy, and the template can use Polymer
   * data-binding and declarative event features when used in the context of
   * a Polymer element's template.
   *
   * When `if` becomes falsy, the stamped content is hidden but not
   * removed from dom. When `if` subsequently becomes truthy again, the content
   * is simply re-shown. This approach is used due to its favorable performance
   * characteristics: the expense of creating template content is paid only
   * once and lazily.
   *
   * Set the `restamp` property to true to force the stamped content to be
   * created / destroyed when the `if` condition changes.
   *
   * @customElement
   * @polymer
   * @extends PolymerElement
   * @summary Custom element that conditionally stamps and hides or removes
   *   template content based on a boolean flag.
   */var DomIf=/*#__PURE__*/function(_PolymerElement){_inherits(DomIf,_PolymerElement);_createClass(DomIf,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'dom-if';}},{key:"template",get:function get(){return null;}},{key:"properties",get:function get(){return{/**
         * Fired whenever DOM is added or removed/hidden by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */ /**
         * A boolean indicating whether this template should stamp.
         */if:{type:Boolean,observer:'__debounceRender'},/**
         * When true, elements will be removed from DOM and discarded when `if`
         * becomes false and re-created and added back to the DOM when `if`
         * becomes true.  By default, stamped elements will be hidden but left
         * in the DOM when `if` becomes false, which is generally results
         * in better performance.
         */restamp:{type:Boolean,observer:'__debounceRender'}};}}]);function DomIf(){var _this26;_classCallCheck(this,DomIf);_this26=_possibleConstructorReturn(this,_getPrototypeOf(DomIf).call(this));_this26.__renderDebouncer=null;_this26.__invalidProps=null;_this26.__instance=null;_this26._lastIf=false;_this26.__ctor=null;_this26.__hideTemplateChildren__=false;return _this26;}_createClass(DomIf,[{key:"__debounceRender",value:function __debounceRender(){var _this27=this;// Render is async for 2 reasons:
// 1. To eliminate dom creation trashing if user code thrashes `if` in the
//    same turn. This was more common in 1.x where a compound computed
//    property could result in the result changing multiple times, but is
//    mitigated to a large extent by batched property processing in 2.x.
// 2. To avoid double object propagation when a bag including values bound
//    to the `if` property as well as one or more hostProps could enqueue
//    the <dom-if> to flush before the <template>'s host property
//    forwarding. In that scenario creating an instance would result in
//    the host props being set once, and then the enqueued changes on the
//    template would set properties a second time, potentially causing an
//    object to be set to an instance more than once.  Creating the
//    instance async from flushing data ensures this doesn't happen. If
//    we wanted a sync option in the future, simply having <dom-if> flush
//    (or clear) its template's pending host properties before creating
//    the instance would also avoid the problem.
this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,function(){return _this27.__render();});enqueueDebouncer(this.__renderDebouncer);}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(DomIf.prototype),"disconnectedCallback",this).call(this);if(!this.parentNode||this.parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!this.parentNode.host){this.__teardownInstance();}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(DomIf.prototype),"connectedCallback",this).call(this);this.style.display='none';if(this.if){this.__debounceRender();}}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){flush$1();}},{key:"__render",value:function __render(){if(this.if){if(!this.__ensureInstance()){// No template found yet
return;}this._showHideChildren();}else if(this.restamp){this.__teardownInstance();}if(!this.restamp&&this.__instance){this._showHideChildren();}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));this._lastIf=this.if;}}},{key:"__ensureInstance",value:function __ensureInstance(){var _this28=this;var parentNode=this.parentNode;// Guard against element being detached while render was queued
if(parentNode){if(!this.__ctor){var _template3=/** @type {HTMLTemplateElement} */this.querySelector('template');if(!_template3){// Wait until childList changes and template should be there by then
var _observer3=new MutationObserver(function(){if(_this28.querySelector('template')){_observer3.disconnect();_this28.__render();}else{throw new Error('dom-if requires a <template> child');}});_observer3.observe(this,{childList:true});return false;}this.__ctor=templatize(_template3,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:true,/**
             * @param {string} prop Property to forward
             * @param {*} value Value of property
             * @this {DomIf}
             */forwardHostProp:function forwardHostProp(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value);}else{// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=true;}}}});}if(!this.__instance){this.__instance=new this.__ctor();parentNode.insertBefore(this.__instance.root,this);}else{this.__syncHostProperties();var c$=this.__instance.children;if(c$&&c$.length){// Detect case where dom-if was re-attached in new position
var lastChild=this.previousSibling;if(lastChild!==c$[c$.length-1]){for(var _i59=0,n;_i59<c$.length&&(n=c$[_i59]);_i59++){parentNode.insertBefore(n,this);}}}}}return true;}},{key:"__syncHostProperties",value:function __syncHostProperties(){var props=this.__invalidProps;if(props){for(var prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop]);}this.__invalidProps=null;this.__instance._flushProperties();}}},{key:"__teardownInstance",value:function __teardownInstance(){if(this.__instance){var c$=this.__instance.children;if(c$&&c$.length){// use first child parent, for case when dom-if may have been detached
var parent=c$[0].parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(parent){for(var _i60=0,n;_i60<c$.length&&(n=c$[_i60]);_i60++){parent.removeChild(n);}}}this.__instance=null;this.__invalidProps=null;}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @return {void}
     * @protected
     * @suppress {visibility}
     */},{key:"_showHideChildren",value:function _showHideChildren(){var hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden);}}}]);return DomIf;}(PolymerElement);customElements.define(DomIf.is,DomIf);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array such that path changes to the
   * master array (at the host) element or elsewhere via data-binding) are
   * correctly propagated to items in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * @polymer
   * @mixinFunction
   * @appliesMixin ElementMixin
   * @summary Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array
   */var ArraySelectorMixin=dedupingMixin(function(superClass){/**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_ElementMixin}
     * @private
     */var elementBase=ElementMixin(superClass);/**
     * @polymer
     * @mixinClass
     * @implements {Polymer_ArraySelectorMixin}
     * @unrestricted
     */var ArraySelectorMixin=/*#__PURE__*/function(_elementBase2){_inherits(ArraySelectorMixin,_elementBase2);_createClass(ArraySelectorMixin,null,[{key:"properties",get:function get(){return{/**
           * An array containing items from which selection will be made.
           */items:{type:Array},/**
           * When `true`, multiple items may be selected at once (in this case,
           * `selected` is an array of currently selected items).  When `false`,
           * only one item may be selected at a time.
           */multi:{type:Boolean,value:false},/**
           * When `multi` is true, this is an array that contains any selected.
           * When `multi` is false, this is the currently selected item, or `null`
           * if no item is selected.
           * @type {?(Object|Array<!Object>)}
           */selected:{type:Object,notify:true},/**
           * When `multi` is false, this is the currently selected item, or `null`
           * if no item is selected.
           * @type {?Object}
           */selectedItem:{type:Object,notify:true},/**
           * When `true`, calling `select` on an item that is already selected
           * will deselect the item.
           */toggle:{type:Boolean,value:false}};}},{key:"observers",get:function get(){return['__updateSelection(multi, items.*)'];}}]);function ArraySelectorMixin(){var _this29;_classCallCheck(this,ArraySelectorMixin);_this29=_possibleConstructorReturn(this,_getPrototypeOf(ArraySelectorMixin).call(this));_this29.__lastItems=null;_this29.__lastMulti=null;_this29.__selectedMap=null;return _this29;}_createClass(ArraySelectorMixin,[{key:"__updateSelection",value:function __updateSelection(multi,itemsInfo){var path=itemsInfo.path;if(path=='items'){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
var newItems=itemsInfo.base||[];var lastItems=this.__lastItems;var lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection();}if(lastItems){var splices=calculateSplices(newItems,lastItems);this.__applySplices(splices);}this.__lastItems=newItems;this.__lastMulti=multi;}else if(itemsInfo.path=='items.splices'){// Case 2 - got specific splice information describing the array mutation:
// deselect any removed items and adjust selected indices
this.__applySplices(itemsInfo.value.indexSplices);}else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
var part=path.slice('items.'.length);var idx=parseInt(part,10);if(part.indexOf('.')<0&&part==idx){this.__deselectChangedIdx(idx);}}}},{key:"__applySplices",value:function __applySplices(splices){var _this30=this;var selected=this.__selectedMap;// Adjust selected indices and mark removals
var _loop4=function _loop4(_i61){var s=splices[_i61];selected.forEach(function(idx,item){if(idx<s.index);else if(idx>=s.index+s.removed.length){// adjust index
selected.set(item,idx+s.addedCount-s.removed.length);}else{// remove index
selected.set(item,-1);}});for(var j=0;j<s.addedCount;j++){var idx=s.index+j;if(selected.has(_this30.items[idx])){selected.set(_this30.items[idx],idx);}}};for(var _i61=0;_i61<splices.length;_i61++){_loop4(_i61);}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
var sidx=0;selected.forEach(function(idx,item){if(idx<0){if(_this30.multi){_this30.splice('selected',sidx,1);}else{_this30.selected=_this30.selectedItem=null;}selected.delete(item);}else{sidx++;}});}},{key:"__updateLinks",value:function __updateLinks(){var _this31=this;this.__dataLinkedPaths={};if(this.multi){var sidx=0;this.__selectedMap.forEach(function(idx){if(idx>=0){_this31.linkPaths('items.'+idx,'selected.'+sidx++);}});}else{this.__selectedMap.forEach(function(idx){_this31.linkPaths('selected','items.'+idx);_this31.linkPaths('selectedItem','items.'+idx);});}}/**
       * Clears the selection state.
       * @return {void}
       */},{key:"clearSelection",value:function clearSelection(){// Unbind previous selection
this.__dataLinkedPaths={};// The selected map stores 3 pieces of information:
// key: items array object
// value: items array index
// order: selected array index
this.__selectedMap=new Map();// Initialize selection
this.selected=this.multi?[]:null;this.selectedItem=null;}/**
       * Returns whether the item is currently selected.
       *
       * @param {*} item Item from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isSelected",value:function isSelected(item){return this.__selectedMap.has(item);}/**
       * Returns whether the item is currently selected.
       *
       * @param {number} idx Index from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isIndexSelected",value:function isIndexSelected(idx){return this.isSelected(this.items[idx]);}},{key:"__deselectChangedIdx",value:function __deselectChangedIdx(idx){var _this32=this;var sidx=this.__selectedIndexForItemIndex(idx);if(sidx>=0){var _i62=0;this.__selectedMap.forEach(function(idx,item){if(sidx==_i62++){_this32.deselect(item);}});}}},{key:"__selectedIndexForItemIndex",value:function __selectedIndexForItemIndex(idx){var selected=this.__dataLinkedPaths['items.'+idx];if(selected){return parseInt(selected.slice('selected.'.length),10);}}/**
       * Deselects the given item if it is already selected.
       *
       * @param {*} item Item from `items` array to deselect
       * @return {void}
       */},{key:"deselect",value:function deselect(item){var idx=this.__selectedMap.get(item);if(idx>=0){this.__selectedMap.delete(item);var sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx);}this.__updateLinks();if(this.multi){this.splice('selected',sidx,1);}else{this.selected=this.selectedItem=null;}}}/**
       * Deselects the given index if it is already selected.
       *
       * @param {number} idx Index from `items` array to deselect
       * @return {void}
       */},{key:"deselectIndex",value:function deselectIndex(idx){this.deselect(this.items[idx]);}/**
       * Selects the given item.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {*} item Item from `items` array to select
       * @return {void}
       */},{key:"select",value:function select(item){this.selectIndex(this.items.indexOf(item));}/**
       * Selects the given index.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {number} idx Index from `items` array to select
       * @return {void}
       */},{key:"selectIndex",value:function selectIndex(idx){var item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear();}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push('selected',item);}else{this.selected=this.selectedItem=item;}}else if(this.toggle){this.deselectIndex(idx);}}}]);return ArraySelectorMixin;}(elementBase);return ArraySelectorMixin;});/**
   * @constructor
   * @extends {PolymerElement}
   * @implements {Polymer_ArraySelectorMixin}
   * @private
   */var baseArraySelector=ArraySelectorMixin(PolymerElement);/**
   * Element implementing the `ArraySelector` mixin, which records
   * dynamic associations between item paths in a master `items` array and a
   * `selected` array such that path changes to the master array (at the host)
   * element or elsewhere via data-binding) are correctly propagated to items
   * in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * Example:
   *
   * ```js
   * import {PolymerElement} from '@polymer/polymer';
   * import '@polymer/polymer/lib/elements/array-selector.js';
   *
   * class EmployeeList extends PolymerElement {
   *   static get _template() {
   *     return html`
   *         <div> Employee list: </div>
   *         <dom-repeat id="employeeList" items="{{employees}}">
   *           <template>
   *             <div>First name: <span>{{item.first}}</span></div>
   *               <div>Last name: <span>{{item.last}}</span></div>
   *               <button on-click="toggleSelection">Select</button>
   *           </template>
   *         </dom-repeat>
   *
   *         <array-selector id="selector"
   *                         items="{{employees}}"
   *                         selected="{{selected}}"
   *                         multi toggle></array-selector>
   *
   *         <div> Selected employees: </div>
   *         <dom-repeat items="{{selected}}">
   *           <template>
   *             <div>First name: <span>{{item.first}}</span></div>
   *             <div>Last name: <span>{{item.last}}</span></div>
   *           </template>
   *         </dom-repeat>`;
   *   }
   *   static get is() { return 'employee-list'; }
   *   static get properties() {
   *     return {
   *       employees: {
   *         value() {
   *           return [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *           ];
   *         }
   *       }
   *     };
   *   }
   *   toggleSelection(e) {
   *     const item = this.$.employeeList.itemForElement(e.target);
   *     this.$.selector.select(item);
   *   }
   * }
   * ```
   *
   * @polymer
   * @customElement
   * @extends {baseArraySelector}
   * @appliesMixin ArraySelectorMixin
   * @summary Custom element that links paths between an input `items` array and
   *   an output `selected` item or array based on calls to its selection API.
   */var ArraySelector=/*#__PURE__*/function(_baseArraySelector){_inherits(ArraySelector,_baseArraySelector);function ArraySelector(){_classCallCheck(this,ArraySelector);return _possibleConstructorReturn(this,_getPrototypeOf(ArraySelector).apply(this,arguments));}_createClass(ArraySelector,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'array-selector';}}]);return ArraySelector;}(baseArraySelector);customElements.define(ArraySelector.is,ArraySelector);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var customStyleInterface=new CustomStyleInterface();if(!window.ShadyCSS){window.ShadyCSS={/**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
       * @param {Element} element
       * @param {Object=} properties
       */styleSubtree:function styleSubtree(element,properties){customStyleInterface.processStyles();updateNativeProperties(element,properties);},/**
       * @param {Element} element
       */styleElement:function styleElement(element){// eslint-disable-line no-unused-vars
customStyleInterface.processStyles();},/**
       * @param {Object=} properties
       */styleDocument:function styleDocument(properties){customStyleInterface.processStyles();updateNativeProperties(document.body,properties);},/**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property);},flushCustomStyles:function flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow};}window.ShadyCSS.CustomStyleInterface=customStyleInterface;/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var attr='include';var CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;/**
   * Custom element for defining styles in the main document that can take
   * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
   * for style encapsulation, custom properties, and custom mixins.
   *
   * - Document styles defined in a `<custom-style>` are shimmed to ensure they
   *   do not leak into local DOM when running on browsers without native
   *   Shadow DOM.
   * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
   *   to define custom properties that apply to all custom elements.
   * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
   *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
   *   (`shadycss/apply-shim.html`).
   *
   * To use:
   *
   * - Import `custom-style.html`.
   * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
   *   contains the CSS rules you want to shim.
   *
   * For example:
   *
   * ```html
   * <!-- import apply shim--only required if using mixins -->
   * <link rel="import" href="bower_components/shadycss/apply-shim.html">
   * <!-- import custom-style element -->
   * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
   *
   * <custom-style>
   *   <style>
   *     html {
   *       --custom-color: blue;
   *       --custom-mixin: {
   *         font-weight: bold;
   *         color: red;
   *       };
   *     }
   *   </style>
   * </custom-style>
   * ```
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element for defining styles in the main document that can
   *   take advantage of Polymer's style scoping and custom properties shims.
   */var CustomStyle=/*#__PURE__*/function(_HTMLElement2){_inherits(CustomStyle,_HTMLElement2);function CustomStyle(){var _this33;_classCallCheck(this,CustomStyle);_this33=_possibleConstructorReturn(this,_getPrototypeOf(CustomStyle).call(this));_this33._style=null;CustomStyleInterface$1.addCustomStyle(_assertThisInitialized(_assertThisInitialized(_this33)));return _this33;}/**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @export
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */_createClass(CustomStyle,[{key:"getStyle",value:function getStyle(){if(this._style){return this._style;}var style=/** @type {HTMLStyleElement} */this.querySelector('style');if(!style){return null;}this._style=style;var include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent;}/*
      HTML Imports styling the main document are deprecated in Chrome
      https://crbug.com/523952

      If this element is not in the main document, then it must be in an HTML Import document.
      In that case, move the custom style to the main document.

      The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
      cases of ordering w.r.t the main document styles.
      */if(this.ownerDocument!==window.document){window.document.head.appendChild(this);}return this._style;}}]);return CustomStyle;}(_wrapNativeSuper(HTMLElement));window.customElements.define('custom-style',CustomStyle);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var mutablePropertyChange$1;/** @suppress {missingProperties} */(function(){mutablePropertyChange$1=MutableData._mutablePropertyChange;})();/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ // bc
var Base=LegacyElementMixin(HTMLElement).prototype;/**
   * marked - a markdown parser
   * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
   * https://github.com/markedjs/marked
   */(function(root){/**
   * Block-Level Grammar
   */var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};block._label=/(?:\\[\[\]]|[^\[\]])+/;block._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;block.def=edit(block.def).replace('label',block._label).replace('title',block._title).getRegex();block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=edit(block.item,'gm').replace(/bull/g,block.bullet).getRegex();block.list=edit(block.list).replace(/bull/g,block.bullet).replace('hr','\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def','\\n+(?='+block.def.source+')').getRegex();block._tag='(?!(?:'+'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'+'|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'+'|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';block.html=edit(block.html).replace('comment',/<!--[\s\S]*?-->/).replace('closed',/<(tag)[\s\S]+?<\/\1>/).replace('closing',/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,block._tag).getRegex();block.paragraph=edit(block.paragraph).replace('hr',block.hr).replace('heading',block.heading).replace('lheading',block.lheading).replace('tag','<'+block._tag).getRegex();block.blockquote=edit(block.blockquote).replace('paragraph',block.paragraph).getRegex();/**
   * Normal Block Grammar
   */block.normal=merge({},block);/**
   * GFM Block Grammar
   */block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=edit(block.paragraph).replace('(?!','(?!'+block.gfm.fences.source.replace('\\1','\\2')+'|'+block.list.source.replace('\\1','\\3')+'|').getRegex();/**
   * GFM + Tables Block Grammar
   */block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});/**
   * Block Lexer
   */function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables;}else{this.rules=block.gfm;}}}/**
   * Expose Block Rules
   */Lexer.rules=block;/**
   * Static Lex Method
   */Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src);};/**
   * Preprocessing
   */Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,'\n').replace(/\t/g,'    ').replace(/\u00a0/g,' ').replace(/\u2424/g,'\n');return this.token(src,true);};/**
   * Lexing
   */Lexer.prototype.token=function(src,top){src=src.replace(/^ +$/gm,'');var next,loose,cap,bull,b,item,space,i,tag,l,isordered;while(src){// newline
if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:'space'});}}// code
if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,'');this.tokens.push({type:'code',text:!this.options.pedantic?cap.replace(/\n+$/,''):cap});continue;}// fences (gfm)
if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:'code',lang:cap[2],text:cap[3]||''});continue;}// heading
if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:'heading',depth:cap[1].length,text:cap[2]});continue;}// table no leading pipe (gfm)
if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:'table',header:cap[1].replace(/^ *| *\| *$/g,'').split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,'').split(/ *\| */),cells:cap[3].replace(/\n$/,'').split('\n')};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]='right';}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]='center';}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]='left';}else{item.align[i]=null;}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */);}this.tokens.push(item);continue;}// hr
if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:'hr'});continue;}// blockquote
if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:'blockquote_start'});cap=cap[0].replace(/^ *> ?/gm,'');// Pass `top` to keep the current
// "toplevel" state. This is exactly
// how markdown.pl works.
this.token(cap,top);this.tokens.push({type:'blockquote_end'});continue;}// list
if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];isordered=bull.length>1;this.tokens.push({type:'list_start',ordered:isordered,start:isordered?+bull:''});// Get each top-level item.
cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];// Remove the list item's bullet
// so it is seen as the next token.
space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,'');// Outdent whatever the
// list item contains. Hacky.
if(~item.indexOf('\n ')){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp('^ {1,'+space+'}','gm'),''):item.replace(/^ {1,4}/gm,'');}// Determine whether the next list item belongs here.
// Backpedal if it does not belong in this list.
if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join('\n')+src;i=l-1;}}// Determine whether item is loose or not.
// Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
// for discount behavior.
loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==='\n';if(!loose)loose=next;}this.tokens.push({type:loose?'loose_item_start':'list_item_start'});// Recurse.
this.token(item,false);this.tokens.push({type:'list_item_end'});}this.tokens.push({type:'list_end'});continue;}// html
if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?'paragraph':'html',pre:!this.options.sanitizer&&(cap[1]==='pre'||cap[1]==='script'||cap[1]==='style'),text:cap[0]});continue;}// def
if(top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);if(cap[3])cap[3]=cap[3].substring(1,cap[3].length-1);tag=cap[1].toLowerCase();if(!this.tokens.links[tag]){this.tokens.links[tag]={href:cap[2],title:cap[3]};}continue;}// table (gfm)
if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:'table',header:cap[1].replace(/^ *| *\| *$/g,'').split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,'').split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,'').split('\n')};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]='right';}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]='center';}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]='left';}else{item.align[i]=null;}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,'').split(/ *\| */);}this.tokens.push(item);continue;}// lheading
if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:'heading',depth:cap[2]==='='?1:2,text:cap[1]});continue;}// top-level paragraph
if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:'paragraph',text:cap[1].charAt(cap[1].length-1)==='\n'?cap[1].slice(0,-1):cap[1]});continue;}// text
if(cap=this.rules.text.exec(src)){// Top-level should never reach here.
src=src.substring(cap[0].length);this.tokens.push({type:'text',text:cap[0]});continue;}if(src){throw new Error('Infinite loop on byte: '+src.charCodeAt(0));}}return this.tokens;};/**
   * Inline-Level Grammar
   */var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};inline._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;inline._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;inline.autolink=edit(inline.autolink).replace('scheme',inline._scheme).replace('email',inline._email).getRegex();inline._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=edit(inline.link).replace('inside',inline._inside).replace('href',inline._href).getRegex();inline.reflink=edit(inline.reflink).replace('inside',inline._inside).getRegex();/**
   * Normal Inline Grammar
   */inline.normal=merge({},inline);/**
   * Pedantic Inline Grammar
   */inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});/**
   * GFM Inline Grammar
   */inline.gfm=merge({},inline.normal,{escape:edit(inline.escape).replace('])','~|])').getRegex(),url:edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace('email',inline._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:edit(inline.text).replace(']|','~]|').replace('|','|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|').getRegex()});/**
   * GFM + Line Breaks Inline Grammar
   */inline.breaks=merge({},inline.gfm,{br:edit(inline.br).replace('{2,}','*').getRegex(),text:edit(inline.gfm.text).replace('{2,}','*').getRegex()});/**
   * Inline Lexer & Compiler
   */function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer();this.renderer.options=this.options;if(!this.links){throw new Error('Tokens array requires a `links` property.');}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks;}else{this.rules=inline.gfm;}}else if(this.options.pedantic){this.rules=inline.pedantic;}}/**
   * Expose Inline Rules
   */InlineLexer.rules=inline;/**
   * Static Lexing/Compiling Method
   */InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src);};/**
   * Lexing/Compiling
   */InlineLexer.prototype.output=function(src){var out='',link,text,href,cap;while(src){// escape
if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue;}// autolink
if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==='@'){text=escape(this.mangle(cap[1]));href='mailto:'+text;}else{text=escape(cap[1]);href=text;}out+=this.renderer.link(href,null,text);continue;}// url (gfm)
if(!this.inLink&&(cap=this.rules.url.exec(src))){cap[0]=this.rules._backpedal.exec(cap[0])[0];src=src.substring(cap[0].length);if(cap[2]==='@'){text=escape(cap[0]);href='mailto:'+text;}else{text=escape(cap[0]);if(cap[1]==='www.'){href='http://'+text;}else{href=text;}}out+=this.renderer.link(href,null,text);continue;}// tag
if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true;}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false;}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue;}// link
if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue;}// reflink, nolink
if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g,' ');link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue;}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue;}// strong
if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue;}// em
if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue;}// code
if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2].trim(),true));continue;}// br
if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue;}// del (gfm)
if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue;}// text
if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue;}if(src){throw new Error('Infinite loop on byte: '+src.charCodeAt(0));}}return out;};/**
   * Compile Link
   */InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=='!'?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]));};/**
   * Smartypants Transformations
   */InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text// em-dashes
.replace(/---/g,"\u2014")// en-dashes
.replace(/--/g,"\u2013")// opening singles
.replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018")// closing singles & apostrophes
.replace(/'/g,"\u2019")// opening doubles
.replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C")// closing doubles
.replace(/"/g,"\u201D")// ellipses
.replace(/\.{3}/g,"\u2026");};/**
   * Mangle Links
   */InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out='',l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>0.5){ch='x'+ch.toString(16);}out+='&#'+ch+';';}return out;};/**
   * Renderer
   */function Renderer(options){this.options=options||{};}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out;}}if(!lang){return'<pre><code>'+(escaped?code:escape(code,true))+'\n</code></pre>';}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+'\n</code></pre>\n';};Renderer.prototype.blockquote=function(quote){return'<blockquote>\n'+quote+'</blockquote>\n';};Renderer.prototype.html=function(html){return html;};Renderer.prototype.heading=function(text,level,raw){return'<h'+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,'-')+'">'+text+'</h'+level+'>\n';};Renderer.prototype.hr=function(){return this.options.xhtml?'<hr/>\n':'<hr>\n';};Renderer.prototype.list=function(body,ordered,start){var type=ordered?'ol':'ul',startatt=ordered&&start!==1?' start="'+start+'"':'';return'<'+type+startatt+'>\n'+body+'</'+type+'>\n';};Renderer.prototype.listitem=function(text){return'<li>'+text+'</li>\n';};Renderer.prototype.paragraph=function(text){return'<p>'+text+'</p>\n';};Renderer.prototype.table=function(header,body){return'<table>\n'+'<thead>\n'+header+'</thead>\n'+'<tbody>\n'+body+'</tbody>\n'+'</table>\n';};Renderer.prototype.tablerow=function(content){return'<tr>\n'+content+'</tr>\n';};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?'th':'td';var tag=flags.align?'<'+type+' style="text-align:'+flags.align+'">':'<'+type+'>';return tag+content+'</'+type+'>\n';};// span level renderer
Renderer.prototype.strong=function(text){return'<strong>'+text+'</strong>';};Renderer.prototype.em=function(text){return'<em>'+text+'</em>';};Renderer.prototype.codespan=function(text){return'<code>'+text+'</code>';};Renderer.prototype.br=function(){return this.options.xhtml?'<br/>':'<br>';};Renderer.prototype.del=function(text){return'<del>'+text+'</del>';};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,'').toLowerCase();}catch(e){return text;}if(prot.indexOf('javascript:')===0||prot.indexOf('vbscript:')===0||prot.indexOf('data:')===0){return text;}}if(this.options.baseUrl&&!originIndependentUrl.test(href)){href=resolveUrl(this.options.baseUrl,href);}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"';}out+='>'+text+'</a>';return out;};Renderer.prototype.image=function(href,title,text){if(this.options.baseUrl&&!originIndependentUrl.test(href)){href=resolveUrl(this.options.baseUrl,href);}var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"';}out+=this.options.xhtml?'/>':'>';return out;};Renderer.prototype.text=function(text){return text;};/**
   * TextRenderer
   * returns only the textual part of the token
   */function TextRenderer(){}// no need for block level renderers
TextRenderer.prototype.strong=TextRenderer.prototype.em=TextRenderer.prototype.codespan=TextRenderer.prototype.del=TextRenderer.prototype.text=function(text){return text;};TextRenderer.prototype.link=TextRenderer.prototype.image=function(href,title,text){return''+text;};TextRenderer.prototype.br=function(){return'';};/**
   * Parsing & Compiling
   */function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer();this.renderer=this.options.renderer;this.renderer.options=this.options;}/**
   * Static Parse Method
   */Parser.parse=function(src,options){var parser=new Parser(options);return parser.parse(src);};/**
   * Parse Loop
   */Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options);// use an InlineLexer with a TextRenderer to extract pure text
this.inlineText=new InlineLexer(src.links,merge({},this.options,{renderer:new TextRenderer()}));this.tokens=src.reverse();var out='';while(this.next()){out+=this.tok();}return out;};/**
   * Next Token
   */Parser.prototype.next=function(){return this.token=this.tokens.pop();};/**
   * Preview Next Token
   */Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0;};/**
   * Parse Text Tokens
   */Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==='text'){body+='\n'+this.next().text;}return this.inline.output(body);};/**
   * Parse Current Token
   */Parser.prototype.tok=function(){switch(this.token.type){case'space':{return'';}case'hr':{return this.renderer.hr();}case'heading':{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,unescape(this.inlineText.output(this.token.text)));}case'code':{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);}case'table':{var header='',body='',i,row,cell,j;// header
cell='';for(i=0;i<this.token.header.length;i++){cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]});}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell='';for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]});}body+=this.renderer.tablerow(cell);}return this.renderer.table(header,body);}case'blockquote_start':{body='';while(this.next().type!=='blockquote_end'){body+=this.tok();}return this.renderer.blockquote(body);}case'list_start':{body='';var ordered=this.token.ordered,start=this.token.start;while(this.next().type!=='list_end'){body+=this.tok();}return this.renderer.list(body,ordered,start);}case'list_item_start':{body='';while(this.next().type!=='list_item_end'){body+=this.token.type==='text'?this.parseText():this.tok();}return this.renderer.listitem(body);}case'loose_item_start':{body='';while(this.next().type!=='list_item_end'){body+=this.tok();}return this.renderer.listitem(body);}case'html':{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html);}case'paragraph':{return this.renderer.paragraph(this.inline.output(this.token.text));}case'text':{return this.renderer.paragraph(this.parseText());}}};/**
   * Helpers
   */function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}function unescape(html){// explicitly match decimal, hex, and named HTML entities
return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,function(_,n){n=n.toLowerCase();if(n==='colon')return':';if(n.charAt(0)==='#'){return n.charAt(1)==='x'?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1));}return'';});}function edit(regex,opt){regex=regex.source;opt=opt||'';return{replace:function replace(name,val){val=val.source||val;val=val.replace(/(^|[^\[])\^/g,'$1');regex=regex.replace(name,val);return this;},getRegex:function getRegex(){return new RegExp(regex,opt);}};}function resolveUrl(base,href){if(!baseUrls[' '+base]){// we can ignore everything in base after the last slash of its path component,
// but we might need to add _that_
// https://tools.ietf.org/html/rfc3986#section-3
if(/^[^:]+:\/*[^/]*$/.test(base)){baseUrls[' '+base]=base+'/';}else{baseUrls[' '+base]=base.replace(/[^/]*$/,'');}}base=baseUrls[' '+base];if(href.slice(0,2)==='//'){return base.replace(/:[\s\S]*/,':')+href;}else if(href.charAt(0)==='/'){return base.replace(/(:\/*[^/]*)[\s\S]*/,'$1')+href;}else{return base+href;}}var baseUrls={};var originIndependentUrl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key];}}}return obj;}/**
   * Marked
   */function marked(src,opt,callback){// throw error in case of non string input
if(typeof src==='undefined'||src===null){throw new Error('marked(): input parameter is undefined or null');}if(typeof src!=='string'){throw new Error('marked(): input parameter is of type '+Object.prototype.toString.call(src)+', string expected');}if(callback||typeof opt==='function'){if(!callback){callback=opt;opt=null;}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt);}catch(e){return callback(e);}pending=tokens.length;var done=function done(err){if(err){opt.highlight=highlight;return callback(err);}var out;try{out=Parser.parse(tokens,opt);}catch(e){err=e;}opt.highlight=highlight;return err?callback(err):callback(null,out);};if(!highlight||highlight.length<3){return done();}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=='code'){return--pending||done();}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done();}token.text=code;token.escaped=true;--pending||done();});})(tokens[i]);}return;}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt);}catch(e){e.message+='\nPlease report this to https://github.com/markedjs/marked.';if((opt||marked.defaults).silent){return'<p>An error occurred:</p><pre>'+escape(e.message+'',true)+'</pre>';}throw e;}}/**
   * Options
   */marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked;};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:'lang-',smartypants:false,headerPrefix:'',renderer:new Renderer(),xhtml:false,baseUrl:null};/**
   * Expose
   */marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.TextRenderer=TextRenderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=='undefined'&&(typeof exports==="undefined"?"undefined":_typeof(exports))==='object'){module.exports=marked;}else if(typeof define==='function'&&define.amd){define(function(){return marked;});}else{root.marked=marked;}})(undefined||(typeof window!=='undefined'?window:global));var marked$1=/*#__PURE__*/Object.freeze({});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */if(!window.marked){// For webpack support for the Polymer 3 version created by the Polymer
// Modulizer More info:
// https://github.com/PolymerElements/marked-element/issues/81
window.marked=marked$1;}/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ /**
  Element wrapper for the [marked](https://github.com/chjj/marked) library.

  `<marked-element>` accepts Markdown source and renders it to a child
  element with the class `markdown-html`. This child element can be styled
  as you would a normal DOM element. If you do not provide a child element
  with the `markdown-html` class, the Markdown source will still be rendered,
  but to a shadow DOM child that cannot be styled.


  ### Markdown Content

  The Markdown source can be specified several ways:

  #### Use the `markdown` attribute to bind markdown

      <marked-element markdown="`Markdown` is _awesome_!">
        <div slot="markdown-html"></div>
      </marked-element>

  #### Use `<script type="text/markdown">` element child to inline markdown

      <marked-element>
        <div slot="markdown-html"></div>
        <script type="text/markdown">
          Check out my markdown!

          We can even embed elements without fear of the HTML parser mucking up their
          textual representation:

          ```html
          <awesome-sauce>
            <div>Oops, I'm about to forget to close this div.
          </awesome-sauce>
          ```
        </script>
      </marked-element>

  #### Use `<script type="text/markdown" src="URL">` element child to specify remote markdown

      <marked-element>
        <div slot="markdown-html"></div>
        <script type="text/markdown" src="../guidelines.md"></script>
      </marked-element>

  Note that the `<script type="text/markdown">` approach is *static*. Changes to
  the script content will *not* update the rendered markdown!

  Though, you can data bind to the `src` attribute to change the markdown.

  ```html
  <marked-element>
    <div slot="markdown-html"></div>
    <script type="text/markdown" src$="[[source]]"></script>
  </marked-element>
  ...
  <script>
    ...
    this.source = '../guidelines.md';
  </script>
  ```

  ### Styling
  If you are using a child with the `markdown-html` class, you can style it
  as you would a regular DOM element:

      [slot="markdown-html"] p {
        color: red;
      }

      [slot="markdown-html"] td:first-child {
        padding-left: 24px;
      }

  @element marked-element
  @demo demo/index.html
  */Polymer({_template:html(_templateObject_593e7270f77111e88ec25b7f4da4f001()),is:'marked-element',properties:{/**
       * The markdown source that should be rendered by this element.
       */markdown:{type:String,value:null},/**
       * Enable GFM line breaks (regular newlines instead of two spaces for
       * breaks)
       */breaks:{type:Boolean,value:false},/**
       * Conform to obscure parts of markdown.pl as much as possible. Don't fix
       * any of the original markdown bugs or poor behavior.
       */pedantic:{type:Boolean,value:false},/**
       * Function used to customize a renderer based on the [API specified in the
       * Marked
       * library](https://github.com/chjj/marked#overriding-renderer-methods).
       * It takes one argument: a marked renderer object, which is mutated by the
       * function.
       */renderer:{type:Function,value:null},/**
       * Sanitize the output. Ignore any HTML that has been input.
       */sanitize:{type:Boolean,value:false},/**
       * Function used to customize a sanitize behavior.
       * It takes one argument: element String without text Contents.
       *
       * e.g. `<div>` `<a href="/">` `</p>'.
       * Note: To enable this function, must set `sanitize` to true.
       * WARNING: If you are using this option to untrusted text, you must to
       * prevent XSS Attacks.
       */sanitizer:{type:Function,value:null},/**
       * If true, disables the default sanitization of any markdown received by
       * a request and allows fetched unsanitized markdown
       *
       * e.g. fetching markdown via `src` that has HTML.
       * Note: this value overrides `sanitize` if a request is made.
       */disableRemoteSanitization:{type:Boolean,value:false},/**
       * Use "smart" typographic punctuation for things like quotes and dashes.
       */smartypants:{type:Boolean,value:false},/**
       * Callback function invoked by Marked after HTML has been rendered.
       * It must take two arguments: err and text and must return the resulting
       * text.
       */callback:{type:Function,value:null},/**
       * A reference to the XMLHttpRequest instance used to generate the
       * network request.
       *
       * @type {XMLHttpRequest}
       */xhr:{type:Object,notify:true,readOnly:true}},observers:['render(markdown, breaks, pedantic, renderer, sanitize, sanitizer, smartypants, callback)'],ready:function ready(){if(this.markdown){return;}// Use the Markdown from the first `<script>` descendant whose MIME type
// starts with "text/markdown". Script elements beyond the first are
// ignored.
this._markdownElement=dom(this).querySelector('[type="text/markdown"]');if(!this._markdownElement){return;}if(this._markdownElement.src){this._request(this._markdownElement.src);}if(this._markdownElement.textContent.trim()!==''){this.markdown=this._unindent(this._markdownElement.textContent);}var observer=new MutationObserver(this._onScriptAttributeChanged.bind(this));observer.observe(this._markdownElement,{attributes:true});},/**
     * Renders `markdown` to HTML when the element is attached.
     *
     * This serves a dual purpose:
     *
     *  * Prevents unnecessary work (no need to render when not visible).
     *
     *  * `attached` fires top-down, so we can give ancestors a chance to
     *    register listeners for the `syntax-highlight` event _before_ we render
     *    any markdown.
     *
     */attached:function attached(){this._attached=true;this._outputElement=this.outputElement;this.render();},detached:function detached(){this._attached=false;},/**
     * Unindents the markdown source that will be rendered.
     *
     * @param {string} text
     * @return {string}
     */unindent:function unindent(text){return this._unindent(text);},get outputElement(){var child=dom(this).queryDistributedElements('[slot="markdown-html"]')[0];return child||this.$.content;},/**
     * The `marked-render-complete` event is fired once Markdown to HTML
     * conversion has finished, and the DOM has been populated via the resulting
     * HTML.
     *
     * @event marked-render-complete
     */ /**
     * Renders `markdown` into this element's DOM.
     *
     * This is automatically called whenever the `markdown` property is changed.
     *
     * The only case where you should be calling this is if you are providing
     * markdown via `<script type="text/markdown">` after this element has been
     * constructed (or updating that markdown).
     */render:function render(){if(!this._attached){return;}if(!this.markdown){dom(this._outputElement).innerHTML='';return;}var renderer=new marked.Renderer();if(this.renderer){this.renderer(renderer);}var opts={renderer:renderer,highlight:this._highlight.bind(this),breaks:this.breaks,sanitize:this.sanitize,sanitizer:this.sanitizer,pedantic:this.pedantic,smartypants:this.smartypants};dom(this._outputElement).innerHTML=marked(this.markdown,opts,this.callback);this.fire('marked-render-complete',{},{composed:true});},/**
     * Fired when the content is being processed and before it is rendered.
     * Provides an opportunity to highlight code blocks based on the programming
     * language used. This is also known as syntax highlighting. One example would
     * be to use a prebuilt syntax highlighting library, e.g with
     * [highlightjs](https://highlightjs.org/).
     *
     * @param {string} code
     * @param {string} lang
     * @return {string}
     * @event syntax-highlight
     */_highlight:function _highlight(code,lang){var event=this.fire('syntax-highlight',{code:code,lang:lang},{composed:true});return event.detail.code||code;},/**
     * @param {string} text
     * @return {string}
     */_unindent:function _unindent(text){if(!text)return text;var lines=text.replace(/\t/g,'  ').split('\n');var indent=lines.reduce(function(prev,line){if(/^\s*$/.test(line))return prev;// Completely ignore blank lines.
var lineIndent=line.match(/^(\s*)/)[0].length;if(prev===null)return lineIndent;return lineIndent<prev?lineIndent:prev;},null);return lines.map(function(l){return l.substr(indent);}).join('\n');},/**
     * Fired when the XHR finishes loading
     *
     * @param {string} url
     * @event marked-loadend
     */_request:function _request(url){this._setXhr(new XMLHttpRequest());var xhr=this.xhr;if(xhr.readyState>0){return null;}xhr.addEventListener('error',this._handleError.bind(this));xhr.addEventListener('loadend',function(e){var status=this.xhr.status||0;// Note: if we are using the file:// protocol, the status code will be 0
// for all outcomes (successful or otherwise).
if(status===0||status>=200&&status<300){this.sanitize=!this.disableRemoteSanitization;this.markdown=e.target.response;}else{this._handleError(e);}this.fire('marked-loadend',e);}.bind(this));xhr.open('GET',url);xhr.setRequestHeader('Accept','text/markdown');xhr.send();},/**
     * Fired when an error is received while fetching remote markdown content.
     *
     * @param {!Event} e
     * @event marked-request-error
     */_handleError:function _handleError(e){var evt=this.fire('marked-request-error',e,{cancelable:true});if(!evt.defaultPrevented){this.markdown='Failed loading markdown source';}},/**
     * @param {!Array<!MutationRecord>} mutation
     */_onScriptAttributeChanged:function _onScriptAttributeChanged(mutation){if(mutation[0].attributeName!=='src'){return;}this._request(this._markdownElement.src);}});/* **********************************************
       Begin prism-core.js
  ********************************************** */var _self=typeof window!=='undefined'?window// if in browser
:typeof WorkerGlobalScope!=='undefined'&&_instanceof(self,WorkerGlobalScope)?self// if in worker
:{}// if in node js
;/**
   * Prism: Lightweight, robust, elegant syntax highlighting
   * MIT license http://www.opensource.org/licenses/mit-license.php/
   * @author Lea Verou http://lea.verou.me
   */var Prism$1=function(){// Private helper vars
var lang=/\blang(?:uage)?-([\w-]+)\b/i;var uniqueId=0;var _=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function encode(tokens){if(_instanceof(tokens,Token)){return new Token(tokens.type,_.util.encode(tokens.content),tokens.alias);}else if(_.util.type(tokens)==='Array'){return tokens.map(_.util.encode);}else{return tokens.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\u00a0/g,' ');}},type:function type(o){return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];},objId:function objId(obj){if(!obj['__id']){Object.defineProperty(obj,'__id',{value:++uniqueId});}return obj['__id'];},// Deep clone a language definition (e.g. to extend it)
clone:function clone(o,visited){var type=_.util.type(o);visited=visited||{};switch(type){case'Object':if(visited[_.util.objId(o)]){return visited[_.util.objId(o)];}var clone={};visited[_.util.objId(o)]=clone;for(var key in o){if(o.hasOwnProperty(key)){clone[key]=_.util.clone(o[key],visited);}}return clone;case'Array':if(visited[_.util.objId(o)]){return visited[_.util.objId(o)];}var clone=[];visited[_.util.objId(o)]=clone;o.forEach(function(v,i){clone[i]=_.util.clone(v,visited);});return clone;}return o;}},languages:{extend:function extend(id,redef){var lang=_.util.clone(_.languages[id]);for(var key in redef){lang[key]=redef[key];}return lang;},/**
  		 * Insert a token before another token in a language literal
  		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
  		 * we cannot just provide an object, we need anobject and a key.
  		 * @param inside The key (or language id) of the parent
  		 * @param before The key to insert before. If not provided, the function appends instead.
  		 * @param insert Object with the key/value pairs to insert
  		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
  		 */insertBefore:function insertBefore(inside,before,insert,root){root=root||_.languages;var grammar=root[inside];if(arguments.length==2){insert=arguments[1];for(var newToken in insert){if(insert.hasOwnProperty(newToken)){grammar[newToken]=insert[newToken];}}return grammar;}var ret={};for(var token in grammar){if(grammar.hasOwnProperty(token)){if(token==before){for(var newToken in insert){if(insert.hasOwnProperty(newToken)){ret[newToken]=insert[newToken];}}}ret[token]=grammar[token];}}// Update references in other language definitions
_.languages.DFS(_.languages,function(key,value){if(value===root[inside]&&key!=inside){this[key]=ret;}});return root[inside]=ret;},// Traverse a language definition with Depth First Search
DFS:function DFS(o,callback,type,visited){visited=visited||{};for(var i in o){if(o.hasOwnProperty(i)){callback.call(o,i,o[i],type||i);if(_.util.type(o[i])==='Object'&&!visited[_.util.objId(o[i])]){visited[_.util.objId(o[i])]=true;_.languages.DFS(o[i],callback,null,visited);}else if(_.util.type(o[i])==='Array'&&!visited[_.util.objId(o[i])]){visited[_.util.objId(o[i])]=true;_.languages.DFS(o[i],callback,i,visited);}}}}},plugins:{},highlightAll:function highlightAll(async,callback){_.highlightAllUnder(document,async,callback);},highlightAllUnder:function highlightAllUnder(container,async,callback){var env={callback:callback,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",env);var elements=env.elements||container.querySelectorAll(env.selector);for(var i=0,element;element=elements[i++];){_.highlightElement(element,async===true,env.callback);}},highlightElement:function highlightElement(element,async,callback){// Find language
var language,grammar,parent=element;while(parent&&!lang.test(parent.className)){parent=parent.parentNode;}if(parent){language=(parent.className.match(lang)||[,''])[1].toLowerCase();grammar=_.languages[language];}// Set language on the element, if not present
element.className=element.className.replace(lang,'').replace(/\s+/g,' ')+' language-'+language;if(element.parentNode){// Set language on the parent, for styling
parent=element.parentNode;if(/pre/i.test(parent.nodeName)){parent.className=parent.className.replace(lang,'').replace(/\s+/g,' ')+' language-'+language;}}var code=element.textContent;var env={element:element,language:language,grammar:grammar,code:code};_.hooks.run('before-sanity-check',env);if(!env.code||!env.grammar){if(env.code){_.hooks.run('before-highlight',env);env.element.textContent=env.code;_.hooks.run('after-highlight',env);}_.hooks.run('complete',env);return;}_.hooks.run('before-highlight',env);if(async&&_self.Worker){var worker=new Worker(_.filename);worker.onmessage=function(evt){env.highlightedCode=evt.data;_.hooks.run('before-insert',env);env.element.innerHTML=env.highlightedCode;callback&&callback.call(env.element);_.hooks.run('after-highlight',env);_.hooks.run('complete',env);};worker.postMessage(JSON.stringify({language:env.language,code:env.code,immediateClose:true}));}else{env.highlightedCode=_.highlight(env.code,env.grammar,env.language);_.hooks.run('before-insert',env);env.element.innerHTML=env.highlightedCode;callback&&callback.call(element);_.hooks.run('after-highlight',env);_.hooks.run('complete',env);}},highlight:function highlight(text,grammar,language){var env={code:text,grammar:grammar,language:language};_.hooks.run('before-tokenize',env);env.tokens=_.tokenize(env.code,env.grammar);_.hooks.run('after-tokenize',env);return Token.stringify(_.util.encode(env.tokens),env.language);},matchGrammar:function matchGrammar(text,strarr,grammar,index,startPos,oneshot,target){var Token=_.Token;for(var token in grammar){if(!grammar.hasOwnProperty(token)||!grammar[token]){continue;}if(token==target){return;}var patterns=grammar[token];patterns=_.util.type(patterns)==="Array"?patterns:[patterns];for(var j=0;j<patterns.length;++j){var pattern=patterns[j],inside=pattern.inside,lookbehind=!!pattern.lookbehind,greedy=!!pattern.greedy,lookbehindLength=0,alias=pattern.alias;if(greedy&&!pattern.pattern.global){// Without the global flag, lastIndex won't work
var flags=pattern.pattern.toString().match(/[imuy]*$/)[0];pattern.pattern=RegExp(pattern.pattern.source,flags+"g");}pattern=pattern.pattern||pattern;// Don’t cache length as it changes during the loop
for(var i=index,pos=startPos;i<strarr.length;pos+=strarr[i].length,++i){var str=strarr[i];if(strarr.length>text.length){// Something went terribly wrong, ABORT, ABORT!
return;}if(_instanceof(str,Token)){continue;}if(greedy&&i!=strarr.length-1){pattern.lastIndex=pos;var match=pattern.exec(text);if(!match){break;}var from=match.index+(lookbehind?match[1].length:0),to=match.index+match[0].length,k=i,p=pos;for(var len=strarr.length;k<len&&(p<to||!strarr[k].type&&!strarr[k-1].greedy);++k){p+=strarr[k].length;// Move the index i to the element in strarr that is closest to from
if(from>=p){++i;pos=p;}}// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
if(_instanceof(strarr[i],Token)){continue;}// Number of tokens to delete and replace with the new match
delNum=k-i;str=text.slice(pos,p);match.index-=pos;}else{pattern.lastIndex=0;var match=pattern.exec(str),delNum=1;}if(!match){if(oneshot){break;}continue;}if(lookbehind){lookbehindLength=match[1]?match[1].length:0;}var from=match.index+lookbehindLength,match=match[0].slice(lookbehindLength),to=from+match.length,before=str.slice(0,from),after=str.slice(to);var args=[i,delNum];if(before){++i;pos+=before.length;args.push(before);}var wrapped=new Token(token,inside?_.tokenize(match,inside):match,alias,match,greedy);args.push(wrapped);if(after){args.push(after);}Array.prototype.splice.apply(strarr,args);if(delNum!=1)_.matchGrammar(text,strarr,grammar,i,pos,true,token);if(oneshot)break;}}}},tokenize:function tokenize(text,grammar,language){var strarr=[text];var rest=grammar.rest;if(rest){for(var token in rest){grammar[token]=rest[token];}delete grammar.rest;}_.matchGrammar(text,strarr,grammar,0,0,false);return strarr;},hooks:{all:{},add:function add(name,callback){var hooks=_.hooks.all;hooks[name]=hooks[name]||[];hooks[name].push(callback);},run:function run(name,env){var callbacks=_.hooks.all[name];if(!callbacks||!callbacks.length){return;}for(var i=0,callback;callback=callbacks[i++];){callback(env);}}}};var Token=_.Token=function(type,content,alias,matchedStr,greedy){this.type=type;this.content=content;this.alias=alias;// Copy of the full string this token was created from
this.length=(matchedStr||"").length|0;this.greedy=!!greedy;};Token.stringify=function(o,language,parent){if(typeof o=='string'){return o;}if(_.util.type(o)==='Array'){return o.map(function(element){return Token.stringify(element,language,o);}).join('');}var env={type:o.type,content:Token.stringify(o.content,language,parent),tag:'span',classes:['token',o.type],attributes:{},language:language,parent:parent};if(o.alias){var aliases=_.util.type(o.alias)==='Array'?o.alias:[o.alias];Array.prototype.push.apply(env.classes,aliases);}_.hooks.run('wrap',env);var attributes=Object.keys(env.attributes).map(function(name){return name+'="'+(env.attributes[name]||'').replace(/"/g,'&quot;')+'"';}).join(' ');return'<'+env.tag+' class="'+env.classes.join(' ')+'"'+(attributes?' '+attributes:'')+'>'+env.content+'</'+env.tag+'>';};if(!_self.document){if(!_self.addEventListener){// in Node.js
return _self.Prism;}if(!_.disableWorkerMessageHandler){// In worker
_self.addEventListener('message',function(evt){var message=JSON.parse(evt.data),lang=message.language,code=message.code,immediateClose=message.immediateClose;_self.postMessage(_.highlight(code,_.languages[lang],lang));if(immediateClose){_self.close();}},false);}return _self.Prism;}//Get current script and highlight
var script=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();if(script){_.filename=script.src;if(!_.manual&&!script.hasAttribute('data-manual')){if(document.readyState!=="loading"){if(window.requestAnimationFrame){window.requestAnimationFrame(_.highlightAll);}else{window.setTimeout(_.highlightAll,16);}}else{document.addEventListener('DOMContentLoaded',_.highlightAll);}}}return _self.Prism;}();if(typeof module!=='undefined'&&module.exports){module.exports=Prism$1;}// hack for components to work correctly in node.js
if(typeof global!=='undefined'){global.Prism=Prism$1;}/* **********************************************
       Begin prism-markup.js
  ********************************************** */Prism$1.languages.markup={'comment':/<!--[\s\S]*?-->/,'prolog':/<\?[\s\S]+?\?>/,'doctype':/<!DOCTYPE[\s\S]+?>/i,'cdata':/<!\[CDATA\[[\s\S]*?]]>/i,'tag':{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:true,inside:{'tag':{pattern:/^<\/?[^\s>\/]+/i,inside:{'punctuation':/^<\/?/,'namespace':/^[^\s>\/:]+:/}},'attr-value':{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{'punctuation':[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:true}]}},'punctuation':/\/?>/,'attr-name':{pattern:/[^\s>\/]+/,inside:{'namespace':/^[^\s>\/:]+:/}}}},'entity':/&#?[\da-z]{1,8};/i};Prism$1.languages.markup['tag'].inside['attr-value'].inside['entity']=Prism$1.languages.markup['entity'];// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism$1.hooks.add('wrap',function(env){if(env.type==='entity'){env.attributes['title']=env.content.replace(/&amp;/,'&');}});Prism$1.languages.xml=Prism$1.languages.markup;Prism$1.languages.html=Prism$1.languages.markup;Prism$1.languages.mathml=Prism$1.languages.markup;Prism$1.languages.svg=Prism$1.languages.markup;/* **********************************************
       Begin prism-css.js
  ********************************************** */Prism$1.languages.css={'comment':/\/\*[\s\S]*?\*\//,'atrule':{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{'rule':/@[\w-]+/ // See rest below
}},'url':/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,'selector':/[^{}\s][^{};]*?(?=\s*\{)/,'string':{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:true},'property':/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,'important':/\B!important\b/i,'function':/[-a-z0-9]+(?=\()/i,'punctuation':/[(){};:]/};Prism$1.languages.css['atrule'].inside.rest=Prism$1.languages.css;if(Prism$1.languages.markup){Prism$1.languages.insertBefore('markup','tag',{'style':{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:true,inside:Prism$1.languages.css,alias:'language-css',greedy:true}});Prism$1.languages.insertBefore('inside','attr-value',{'style-attr':{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{'attr-name':{pattern:/^\s*style/i,inside:Prism$1.languages.markup.tag.inside},'punctuation':/^\s*=\s*['"]|['"]\s*$/,'attr-value':{pattern:/.+/i,inside:Prism$1.languages.css}},alias:'language-css'}},Prism$1.languages.markup.tag);}/* **********************************************
       Begin prism-clike.js
  ********************************************** */Prism$1.languages.clike={'comment':[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:true,greedy:true}],'string':{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:true},'class-name':{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:true,inside:{punctuation:/[.\\]/}},'keyword':/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,'boolean':/\b(?:true|false)\b/,'function':/[a-z0-9_]+(?=\()/i,'number':/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,'operator':/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,'punctuation':/[{}[\];(),.:]/};/* **********************************************
       Begin prism-javascript.js
  ********************************************** */Prism$1.languages.javascript=Prism$1.languages.extend('clike',{'keyword':/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,'number':/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
'function':/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,'operator':/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});Prism$1.languages.insertBefore('javascript','keyword',{'regex':{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:true,greedy:true},// This must be declared before keyword because we use "function" inside the look-forward
'function-variable':{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:'function'},'constant':/\b[A-Z][A-Z\d_]*\b/});Prism$1.languages.insertBefore('javascript','string',{'template-string':{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:true,inside:{'interpolation':{pattern:/\${[^}]+}/,inside:{'interpolation-punctuation':{pattern:/^\${|}$/,alias:'punctuation'},rest:null// See below
}},'string':/[\s\S]+/}}});Prism$1.languages.javascript['template-string'].inside['interpolation'].inside.rest=Prism$1.languages.javascript;if(Prism$1.languages.markup){Prism$1.languages.insertBefore('markup','tag',{'script':{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:true,inside:Prism$1.languages.javascript,alias:'language-javascript',greedy:true}});}Prism$1.languages.js=Prism$1.languages.javascript;/* **********************************************
       Begin prism-file-highlight.js
  ********************************************** */(function(){if(typeof self==='undefined'||!self.Prism||!self.document||!document.querySelector){return;}self.Prism.fileHighlight=function(){var Extensions={'js':'javascript','py':'python','rb':'ruby','ps1':'powershell','psm1':'powershell','sh':'bash','bat':'batch','h':'c','tex':'latex'};Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(pre){var src=pre.getAttribute('data-src');var language,parent=pre;var lang=/\blang(?:uage)?-([\w-]+)\b/i;while(parent&&!lang.test(parent.className)){parent=parent.parentNode;}if(parent){language=(pre.className.match(lang)||[,''])[1];}if(!language){var extension=(src.match(/\.(\w+)$/)||[,''])[1];language=Extensions[extension]||extension;}var code=document.createElement('code');code.className='language-'+language;pre.textContent='';code.textContent='Loading…';pre.appendChild(code);var xhr=new XMLHttpRequest();xhr.open('GET',src,true);xhr.onreadystatechange=function(){if(xhr.readyState==4){if(xhr.status<400&&xhr.responseText){code.textContent=xhr.responseText;Prism$1.highlightElement(code);}else if(xhr.status>=400){code.textContent='✖ Error '+xhr.status+' while fetching file: '+xhr.statusText;}else{code.textContent='✖ Error: File does not exist or is empty';}}};xhr.send(null);});if(Prism$1.plugins.toolbar){Prism$1.plugins.toolbar.registerButton('download-file',function(env){var pre=env.element.parentNode;if(!pre||!/pre/i.test(pre.nodeName)||!pre.hasAttribute('data-src')||!pre.hasAttribute('data-download-link')){return;}var src=pre.getAttribute('data-src');var a=document.createElement('a');a.textContent=pre.getAttribute('data-download-link-label')||'Download';a.setAttribute('download','');a.href=src;return a;});}};document.addEventListener('DOMContentLoaded',self.Prism.fileHighlight);})();/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var HIGHLIGHT_EVENT='syntax-highlight';/**
  Syntax highlighting via [Prism](http://prismjs.com/).

  Place a `<prism-highlighter>` in your document, preferably as a direct child of
  `<body>`. It will listen for `syntax-highlight` events on its parent element,
  and annotate the code being provided via that event.

  The `syntax-highlight` event's detail is expected to have a `code` property
  containing the source to highlight. The event detail can optionally contain a
  `lang` property, containing a string like `"html"`, `"js"`, etc.

  This flow is supported by
  [`<marked-element>`](https://github.com/PolymerElements/marked-element).

  @element prism-highlighter
  @demo demo/index.html
  */Polymer({is:'prism-highlighter',properties:{/**
       * Adds languages outside of the core Prism languages.
       *
       * Prism includes a few languages in the core library:
       *   - JavaScript
       *   - Markup
       *   - CSS
       *   - C-Like
       * Use this property to extend the core set with other Prism
       * components and custom languages.
       *
       * Example:
       *   ```
       *   <!-- with languages = {'custom': myCustomPrismLang}; -->
       *   <!-- or languages = Prism.languages; -->
       *   <prism-highlighter languages="[[languages]]"></prism-highlighter>
       *   ```
       *
       * @attribute languages
       * @type {!Object}
       */languages:{type:Object,value:function value(){return{};}}},ready:function ready(){this._handler=this._highlight.bind(this);},attached:function attached(){(this.parentNode.host||this.parentElement).addEventListener(HIGHLIGHT_EVENT,this._handler);},detached:function detached(){(this.parentNode.host||this.parentElement).removeEventListener(HIGHLIGHT_EVENT,this._handler);},/**
     * Handle the highlighting event, if we can.
     *
     * @param {!CustomEvent} event
     */_highlight:function _highlight(event){if(!event.detail||!event.detail.code){Base._warn('Malformed',HIGHLIGHT_EVENT,'event:',event.detail);return;}event.stopPropagation();var detail=event.detail;detail.code=Prism.highlight(detail.code,this._detectLang(detail.code,detail.lang));},/**
     * Picks a Prism formatter based on the `lang` hint and `code`.
     *
     * @param {string} code The source being highlighted.
     * @param {string=} lang A language hint (e.g. ````LANG`).
     * @return {!Prism.Lang}
     */_detectLang:function _detectLang(code,lang){if(!lang){// Stupid simple detection if we have no lang, courtesy of:
// https://github.com/robdodson/mark-down/blob/ac2eaa/mark-down.html#L93-101
return code.match(/^\s*</)?Prism.languages.markup:Prism.languages.javascript;}if(this.languages[lang]){return this.languages[lang];}else if(Prism.languages[lang]){return Prism.languages[lang];}switch(lang.substr(0,2)){case'js':case'es':return Prism.languages.javascript;case'c':return Prism.languages.clike;default:// The assumption is that you're mostly documenting HTML when in HTML.
return Prism.languages.markup;}}});/**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template=html(_templateObject2_593e7270f77111e88ec25b7f4da4f001());document.head.appendChild(template.content);/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  `demo-snippet` is a helper element that displays the source of a code snippet
  and its rendered demo. It can be used for both native elements and Polymer
  elements.

      Example of a native element demo

          <demo-snippet>
            <template>
              <input type="date">
            </template>
          </demo-snippet>

      Example of a Polymer <paper-checkbox> demo

          <demo-snippet>
            <template>
              <paper-checkbox>Checkbox</paper-checkbox>
              <paper-checkbox checked>Checkbox</paper-checkbox>
            </template>
          </demo-snippet>

  ### Styling

  The following custom properties and mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--demo-snippet` | Mixin applied to the entire element | `{}`
  `--demo-snippet-demo` | Mixin applied to just the demo section | `{}`
  `--demo-snippet-code` | Mixin applied to just the code section | `{}`

  @element demo-snippet
  @demo demo/index.html
  */Polymer({_template:html(_templateObject3_593e7270f77111e88ec25b7f4da4f001()),is:'demo-snippet',properties:{_markdown:{type:String}},attached:function attached(){this._observer=dom(this.$.content).observeNodes(function(info){this._updateMarkdown();}.bind(this));},detached:function detached(){if(this._observer){dom(this.$.content).unobserveNodes(this._observer);this._observer=null;}},_updateMarkdown:function _updateMarkdown(){var template=dom(this).queryDistributedElements('template')[0];// If there's no template, render empty code.
if(!template){this._markdown='';return;}var snippet=this.$.marked.unindent(template.innerHTML);// Hack: In safari + shady dom, sometime we get an empty 'class' attribute.
// if we do, delete it.
snippet=snippet.replace(/ class=""/g,'');// Boolean properties are displayed as checked="", so remove the ="" bit.
snippet=snippet.replace(/=""/g,'');this._markdown='```\n'+snippet+'\n'+'```';// Stamp the template.
if(!template.hasAttribute('is')){// Don't need to listen for more changes (since stamping the template
// will trigger an observeNodes)
dom(this.$.content).unobserveNodes(this._observer);this._observer=null;dom(this).appendChild(document.importNode(template.content,true));}},_copyToClipboard:function _copyToClipboard(){// From
// https://github.com/google/material-design-lite/blob/master/docs/_assets/snippets.js
var snipRange=document.createRange();snipRange.selectNodeContents(this.$.code);var selection=window.getSelection();selection.removeAllRanges();selection.addRange(snipRange);var result=false;try{result=document.execCommand('copy');this.$.copyButton.textContent='done';}catch(err){// Copy command is not available
console.error(err);this.$.copyButton.textContent='error';}// Return to the copy button after a second.
setTimeout(this._resetCopyButtonState.bind(this),1000);selection.removeAllRanges();return result;},_resetCopyButtonState:function _resetCopyButtonState(){this.$.copyButton.textContent='copy';}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  The `<iron-flex-layout>` component provides simple ways to use
  [CSS flexible box
  layout](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes),
  also known as flexbox. Note that this is an old element, that was written
  before all modern browsers had non-prefixed flex styles. As such, nowadays you
  don't really need to use this element anymore, and can use CSS flex styles
  directly in your code.

  This component provides two different ways to use flexbox:

  1. [Layout
  classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
  The layout class stylesheet provides a simple set of class-based flexbox rules,
  that let you specify layout properties directly in markup. You must include this
  file in every element that needs to use them.

      Sample use:

      ```
      <custom-element-demo>
        <template>
          <script src="../webcomponentsjs/webcomponents-lite.js"></script>
          <next-code-block></next-code-block>
        </template>
      </custom-element-demo>
      ```

      ```js
      import {html} from '@polymer/polymer/lib/utils/html-tag.js';
      import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

      const template = html`
        <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
        <style>
          .test { width: 100px; }
        </style>
        <div class="layout horizontal center-center">
          <div class="test">horizontal layout center alignment</div>
        </div>
      `;
      document.body.appendChild(template.content);
      ```

  2. [Custom CSS
  mixins](https://github.com/PolymerElements/iron-flex-layout/blob/master/iron-flex-layout.html).
  The mixin stylesheet includes custom CSS mixins that can be applied inside a CSS
  rule using the `@apply` function.

  Please note that the old [/deep/ layout
  classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/classes)
  are deprecated, and should not be used. To continue using layout properties
  directly in markup, please switch to using the new `dom-module`-based
  [layout
  classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
  Please note that the new version does not use `/deep/`, and therefore requires
  you to import the `dom-modules` in every element that needs to use them.

  @group Iron Elements
  @pseudoElement iron-flex-layout
  @demo demo/index.html
  */var template$1=html(_templateObject4_593e7270f77111e88ec25b7f4da4f001());template$1.setAttribute('style','display: none;');document.head.appendChild(template$1.content);var style=document.createElement('style');style.textContent='[hidden] { display: none !important; }';document.head.appendChild(style);/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$2=html(_templateObject5_593e7270f77111e88ec25b7f4da4f001());template$2.setAttribute('style','display: none;');document.head.appendChild(template$2.content);/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$3=html(_templateObject6_593e7270f77111e88ec25b7f4da4f001());template$3.setAttribute('style','display: none;');document.head.appendChild(template$3.content);/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @demo demo/index.html
   * @polymerBehavior
   */var IronControlState={properties:{/**
       * If true, the element currently has focus.
       */focused:{type:Boolean,value:false,notify:true,readOnly:true,reflectToAttribute:true},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,value:false,notify:true,observer:'_disabledChanged',reflectToAttribute:true},/**
       * Value of the `tabindex` attribute before `disabled` was activated.
       * `null` means the attribute was not present.
       * @type {?string|undefined}
       */_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function value(){return this._focusBlurHandler.bind(this);}}},observers:['_changedControlState(focused, disabled)'],/**
     * @return {void}
     */ready:function ready(){this.addEventListener('focus',this._boundFocusBlurHandler,true);this.addEventListener('blur',this._boundFocusBlurHandler,true);},_focusBlurHandler:function _focusBlurHandler(event){// Polymer takes care of retargeting events.
this._setFocused(event.type==='focus');return;},_disabledChanged:function _disabledChanged(disabled,old){this.setAttribute('aria-disabled',disabled?'true':'false');this.style.pointerEvents=disabled?'none':'';if(disabled){// Read the `tabindex` attribute instead of the `tabIndex` property.
// The property returns `-1` if there is no `tabindex` attribute.
// This distinction is important when restoring the value because
// leaving `-1` hides shadow root children from the tab order.
this._oldTabIndex=this.getAttribute('tabindex');this._setFocused(false);this.tabIndex=-1;this.blur();}else if(this._oldTabIndex!==undefined){if(this._oldTabIndex===null){this.removeAttribute('tabindex');}else{this.setAttribute('tabindex',this._oldTabIndex);}}},_changedControlState:function _changedControlState(){// _controlStateChanged is abstract, follow-on behaviors may implement it
if(this._controlStateChanged){this._controlStateChanged();}}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Chrome uses an older version of DOM Level 3 Keyboard Events
   *
   * Most keys are labeled as text, but some are Unicode codepoints.
   * Values taken from:
   * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
   */var KEY_IDENTIFIER={'U+0008':'backspace','U+0009':'tab','U+001B':'esc','U+0020':'space','U+007F':'del'};/**
   * Special table for KeyboardEvent.keyCode.
   * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
   * than that.
   *
   * Values from:
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
   */var KEY_CODE={8:'backspace',9:'tab',13:'enter',27:'esc',33:'pageup',34:'pagedown',35:'end',36:'home',32:'space',37:'left',38:'up',39:'right',40:'down',46:'del',106:'*'};/**
   * MODIFIER_KEYS maps the short name for modifier keys used in a key
   * combo string to the property name that references those same keys
   * in a KeyboardEvent instance.
   */var MODIFIER_KEYS={'shift':'shiftKey','ctrl':'ctrlKey','alt':'altKey','meta':'metaKey'};/**
   * KeyboardEvent.key is mostly represented by printable character made by
   * the keyboard, with unprintable keys labeled nicely.
   *
   * However, on OS X, Alt+char can make a Unicode character that follows an
   * Apple-specific mapping. In this case, we fall back to .keyCode.
   */var KEY_CHAR=/[a-z0-9*]/;/**
   * Matches a keyIdentifier string.
   */var IDENT_CHAR=/U\+/;/**
   * Matches arrow keys in Gecko 27.0+
   */var ARROW_KEY=/^arrow/;/**
   * Matches space keys everywhere (notably including IE10's exceptional name
   * `spacebar`).
   */var SPACE_KEY=/^space(bar)?/;/**
   * Matches ESC key.
   *
   * Value from: http://w3c.github.io/uievents-key/#key-Escape
   */var ESC_KEY=/^escape$/;/**
   * Transforms the key.
   * @param {string} key The KeyBoardEvent.key
   * @param {Boolean} [noSpecialChars] Limits the transformation to
   * alpha-numeric characters.
   */function transformKey(key,noSpecialChars){var validKey='';if(key){var lKey=key.toLowerCase();if(lKey===' '||SPACE_KEY.test(lKey)){validKey='space';}else if(ESC_KEY.test(lKey)){validKey='esc';}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey;}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace('arrow','');}else if(lKey=='multiply'){// numpad '*' can map to Multiply on IE/Windows
validKey='*';}else{validKey=lKey;}}return validKey;}function transformKeyIdentifier(keyIdent){var validKey='';if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent];}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace('U+','0x'),16);validKey=String.fromCharCode(keyIdent).toLowerCase();}else{validKey=keyIdent.toLowerCase();}}return validKey;}function transformKeyCode(keyCode){var validKey='';if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){// ascii a-z
// lowercase is 32 offset from uppercase
validKey=String.fromCharCode(32+keyCode);}else if(keyCode>=112&&keyCode<=123){// function keys f1-f12
validKey='f'+(keyCode-112+1);}else if(keyCode>=48&&keyCode<=57){// top 0-9 keys
validKey=String(keyCode-48);}else if(keyCode>=96&&keyCode<=105){// num pad 0-9
validKey=String(keyCode-96);}else{validKey=KEY_CODE[keyCode];}}return validKey;}/**
   * Calculates the normalized key for a KeyboardEvent.
   * @param {KeyboardEvent} keyEvent
   * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
   * transformation to alpha-numeric chars. This is useful with key
   * combinations like shift + 2, which on FF for MacOS produces
   * keyEvent.key = @
   * To get 2 returned, set noSpecialChars = true
   * To get @ returned, set noSpecialChars = false
   */function normalizedKeyForEvent(keyEvent,noSpecialChars){// Fall back from .key, to .detail.key for artifical keyboard events,
// and then to deprecated .keyIdentifier and .keyCode.
if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars);}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars);}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||'';}function keyComboMatchesEvent(keyCombo,event){// For combos with modifiers we support only alpha-numeric keys
var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey);}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:'keydown'};}return keyComboString.split('+').reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(':');var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true;}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||'keydown';}return parsedKeyCombo;},{combo:keyComboString.split(':').shift()});}function parseEventString(eventString){return eventString.trim().split(' ').map(function(keyComboString){return parseKeyComboString(keyComboString);});}/**
   * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
   * keyboard commands that pertain to [WAI-ARIA best
   * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
   * element takes care of browser differences with respect to Keyboard events and
   * uses an expressive syntax to filter key presses.
   *
   * Use the `keyBindings` prototype property to express what combination of keys
   * will trigger the callback. A key binding has the format
   * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
   * `"KEY:EVENT": "callback"` are valid as well). Some examples:
   *
   *      keyBindings: {
   *        'space': '_onKeydown', // same as 'space:keydown'
   *        'shift+tab': '_onKeydown',
   *        'enter:keypress': '_onKeypress',
   *        'esc:keyup': '_onKeyup'
   *      }
   *
   * The callback will receive with an event containing the following information
   * in `event.detail`:
   *
   *      _onKeydown: function(event) {
   *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
   *        console.log(event.detail.key); // KEY only, e.g. "tab"
   *        console.log(event.detail.event); // EVENT, e.g. "keydown"
   *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
   *      }
   *
   * Use the `keyEventTarget` attribute to set up event handlers on a specific
   * node.
   *
   * See the [demo source
   * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
   * for an example.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */var IronA11yKeysBehavior={properties:{/**
       * The EventTarget that will be firing relevant KeyboardEvents. Set it to
       * `null` to disable the listeners.
       * @type {?EventTarget}
       */keyEventTarget:{type:Object,value:function value(){return this;}},/**
       * If true, this property will cause the implementing element to
       * automatically stop propagation on any handled KeyboardEvents.
       */stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function value(){return[];}},// We use this due to a limitation in IE10 where instances will have
// own properties of everything on the "prototype".
_imperativeKeyBindings:{type:Object,value:function value(){return{};}}},observers:['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],/**
     * To be used to express what combination of keys  will trigger the relative
     * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
     * @type {!Object}
     */keyBindings:{},registered:function registered(){this._prepKeyBindings();},attached:function attached(){this._listenKeyEventListeners();},detached:function detached(){this._unlistenKeyEventListeners();},/**
     * Can be used to imperatively add a key binding to the implementing
     * element. This is the imperative equivalent of declaring a keybinding
     * in the `keyBindings` prototype property.
     *
     * @param {string} eventString
     * @param {string} handlerName
     */addOwnKeyBinding:function addOwnKeyBinding(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners();},/**
     * When called, will remove all imperatively-added key bindings.
     */removeOwnKeyBindings:function removeOwnKeyBindings(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners();},/**
     * Returns true if a keyboard event matches `eventString`.
     *
     * @param {KeyboardEvent} event
     * @param {string} eventString
     * @return {boolean}
     */keyboardEventMatchesKeys:function keyboardEventMatchesKeys(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true;}}return false;},_collectKeyBindings:function _collectKeyBindings(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings;});if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings);}return keyBindings;},_prepKeyBindings:function _prepKeyBindings(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString]);}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString]);}// Give precedence to combos with modifiers to be checked first.
for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1;});}},_addKeyBinding:function _addKeyBinding(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName]);},this);},_resetKeyEventListeners:function _resetKeyEventListeners(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners();}},_listenKeyEventListeners:function _listenKeyEventListeners(){if(!this.keyEventTarget){return;}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler);},this);},_unlistenKeyEventListeners:function _unlistenKeyEventListeners(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){// My kingdom for block-scope binding and destructuring assignment..
keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler);}},_onKeyBindingEvent:function _onKeyBindingEvent(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation();}// if event has been already prevented, don't do anything
if(event.defaultPrevented){return;}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);// exit the loop if eventDefault was prevented
if(event.defaultPrevented){return;}}}},_triggerKeyHandler:function _triggerKeyHandler(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault();}}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @demo demo/index.html
   * @polymerBehavior IronButtonState
   */var IronButtonStateImpl={properties:{/**
       * If true, the user is currently holding down the button.
       */pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:'_pressedChanged'},/**
       * If true, the button toggles the active state with each tap or press
       * of the spacebar.
       */toggles:{type:Boolean,value:false,reflectToAttribute:true},/**
       * If true, the button is a toggle and is currently in the active state.
       */active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},/**
       * True if the element is currently being pressed by a "pointer," which
       * is loosely defined as mouse or touch input (but specifically excluding
       * keyboard input).
       */pointerDown:{type:Boolean,readOnly:true,value:false},/**
       * True if the input device that caused the element to receive focus
       * was a keyboard.
       */receivedFocusFromKeyboard:{type:Boolean,readOnly:true},/**
       * The aria attribute to be set if the button is a toggle and in the
       * active state.
       */ariaActiveAttribute:{type:String,value:'aria-pressed',observer:'_ariaActiveAttributeChanged'}},listeners:{down:'_downHandler',up:'_upHandler',tap:'_tapHandler'},observers:['_focusChanged(focused)','_activeChanged(active, ariaActiveAttribute)'],/**
     * @type {!Object}
     */keyBindings:{'enter:keydown':'_asyncClick','space:keydown':'_spaceKeyDownHandler','space:keyup':'_spaceKeyUpHandler'},_mouseEventRe:/^mouse/,_tapHandler:function _tapHandler(){if(this.toggles){// a tap is needed to toggle the active state
this._userActivate(!this.active);}else{this.active=false;}},_focusChanged:function _focusChanged(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false);}},_detectKeyboardFocus:function _detectKeyboardFocus(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused);},// to emulate native checkbox, (de-)activations from a user interaction fire
// 'change' events
_userActivate:function _userActivate(active){if(this.active!==active){this.active=active;this.fire('change');}},_downHandler:function _downHandler(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false);},_upHandler:function _upHandler(){this._setPointerDown(false);this._setPressed(false);},/**
     * @param {!KeyboardEvent} event .
     */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true);},/**
     * @param {!KeyboardEvent} event .
     */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;if(this.pressed){this._asyncClick();}this._setPressed(false);},// trigger click asynchronously, the asynchrony is useful to allow one
// event handler to unwind before triggering another event
_asyncClick:function _asyncClick(){this.async(function(){this.click();},1);},// any of these changes are considered a change to button state
_pressedChanged:function _pressedChanged(pressed){this._changedButtonState();},_ariaActiveAttributeChanged:function _ariaActiveAttributeChanged(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue);}},_activeChanged:function _activeChanged(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?'true':'false');}else{this.removeAttribute(this.ariaActiveAttribute);}this._changedButtonState();},_controlStateChanged:function _controlStateChanged(){if(this.disabled){this._setPressed(false);}else{this._changedButtonState();}},// provide hook for follow-on behaviors to react to button-state
_changedButtonState:function _changedButtonState(){if(this._buttonStateChanged){this._buttonStateChanged();// abstract
}}};/** @polymerBehavior */var IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];/**
  @license
  Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var Utility={distance:function distance(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta);},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};/**
   * @param {HTMLElement} element
   * @constructor
   */function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=Math.max(this.width,this.height);}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect();},furthestCornerDistanceFrom:function furthestCornerDistanceFrom(x,y){var topLeft=Utility.distance(x,y,0,0);var topRight=Utility.distance(x,y,this.width,0);var bottomLeft=Utility.distance(x,y,0,this.height);var bottomRight=Utility.distance(x,y,this.width,this.height);return Math.max(topLeft,topRight,bottomLeft,bottomRight);}};/**
   * @param {HTMLElement} element
   * @constructor
   */function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement('div');this.waveContainer=document.createElement('div');this.wave.style.backgroundColor=this.color;this.wave.classList.add('wave');this.waveContainer.classList.add('wave-container');dom(this.waveContainer).appendChild(this.wave);this.resetInteractionState();}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters;},get center(){return this.element.center;},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0;}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed;}return elapsed;},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0;},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1000;},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1000;},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds;},get initialOpacity(){return this.element.initialOpacity;},get opacityDecayVelocity(){return this.element.opacityDecayVelocity;},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width;var height2=this.containerMetrics.height*this.containerMetrics.height;var waveRadius=Math.min(Math.sqrt(width2+height2),Ripple.MAX_RADIUS)*1.1+5;var duration=1.1-0.2*(waveRadius/Ripple.MAX_RADIUS);var timeNow=this.mouseInteractionSeconds/duration;var size=waveRadius*(1-Math.pow(80,-timeNow));return Math.abs(size);},get opacity(){if(!this.mouseUpStart){return this.initialOpacity;}return Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity);},get outerOpacity(){// Linear increase in background opacity, capped at the opacity
// of the wavefront (waveOpacity).
var outerOpacity=this.mouseUpElapsedSeconds*0.3;var waveOpacity=this.opacity;return Math.max(0,Math.min(outerOpacity,waveOpacity));},get isOpacityFullyDecayed(){return this.opacity<0.01&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS);},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS);},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius;},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2));},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart);}return this.xStart;},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart);}return this.yStart;},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart;},resetInteractionState:function resetInteractionState(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element);},draw:function draw(){var scale;var dx;var dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;// 2d transform for safari because of border-radius and overflow:hidden
// clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538
this.waveContainer.style.webkitTransform='translate('+dx+'px, '+dy+'px)';this.waveContainer.style.transform='translate3d('+dx+'px, '+dy+'px, 0)';this.wave.style.webkitTransform='scale('+scale+','+scale+')';this.wave.style.transform='scale3d('+scale+','+scale+',1)';},/** @param {Event=} event */downAction:function downAction(event){var xCenter=this.containerMetrics.width/2;var yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd);}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2;}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd);}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+'px';this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+'px';this.waveContainer.style.width=this.containerMetrics.size+'px';this.waveContainer.style.height=this.containerMetrics.size+'px';},/** @param {Event=} event */upAction:function upAction(event){if(!this.isMouseDown){return;}this.mouseUpStart=Utility.now();},remove:function remove(){dom(this.waveContainer.parentNode).removeChild(this.waveContainer);}};/**
  Material design: [Surface
  reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)

  `paper-ripple` provides a visual effect that other paper elements can
  use to simulate a rippling effect emanating from the point of contact.  The
  effect can be visualized as a concentric circle with motion.

  Example:

      <div style="position:relative">
        <paper-ripple></paper-ripple>
      </div>

  Note, it's important that the parent container of the ripple be relative
  position, otherwise the ripple will emanate outside of the desired container.

  `paper-ripple` listens to "mousedown" and "mouseup" events so it would display
  ripple effect when touches on it.  You can also defeat the default behavior and
  manually route the down and up actions to the ripple element.  Note that it is
  important if you call `downAction()` you will have to make sure to call
  `upAction()` so that `paper-ripple` would end the animation loop.

  Example:

      <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
      ...
      downAction: function(e) {
        this.$.ripple.downAction(e.detail);
      },
      upAction: function(e) {
        this.$.ripple.upAction();
      }

  Styling ripple effect:

    Use CSS color property to style the ripple:

      paper-ripple {
        color: #4285f4;
      }

    Note that CSS color property is inherited so it is not required to set it on
    the `paper-ripple` element directly.

  By default, the ripple is centered on the point of contact.  Apply the
  `recenters` attribute to have the ripple grow toward the center of its
  container.

      <paper-ripple recenters></paper-ripple>

  You can also  center the ripple inside its container from the start.

      <paper-ripple center></paper-ripple>

  Apply `circle` class to make the rippling effect within a circle.

      <paper-ripple class="circle"></paper-ripple>

  @group Paper Elements
  @element paper-ripple
  @hero hero.svg
  @demo demo/index.html
  */Polymer({_template:html(_templateObject7_593e7270f77111e88ec25b7f4da4f001()),is:'paper-ripple',behaviors:[IronA11yKeysBehavior],properties:{/**
       * The initial opacity set on the wave.
       *
       * @attribute initialOpacity
       * @type number
       * @default 0.25
       */initialOpacity:{type:Number,value:0.25},/**
       * How fast (opacity per second) the wave fades out.
       *
       * @attribute opacityDecayVelocity
       * @type number
       * @default 0.8
       */opacityDecayVelocity:{type:Number,value:0.8},/**
       * If true, ripples will exhibit a gravitational pull towards
       * the center of their container as they fade away.
       *
       * @attribute recenters
       * @type boolean
       * @default false
       */recenters:{type:Boolean,value:false},/**
       * If true, ripples will center inside its container
       *
       * @attribute recenters
       * @type boolean
       * @default false
       */center:{type:Boolean,value:false},/**
       * A list of the visual ripples.
       *
       * @attribute ripples
       * @type Array
       * @default []
       */ripples:{type:Array,value:function value(){return[];}},/**
       * True when there are visible ripples animating within the
       * element.
       */animating:{type:Boolean,readOnly:true,reflectToAttribute:true,value:false},/**
       * If true, the ripple will remain in the "down" state until `holdDown`
       * is set to false again.
       */holdDown:{type:Boolean,value:false,observer:'_holdDownChanged'},/**
       * If true, the ripple will not generate a ripple effect
       * via pointer interaction.
       * Calling ripple's imperative api like `simulatedRipple` will
       * still generate the ripple effect.
       */noink:{type:Boolean,value:false},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function value(){return this.animate.bind(this);}}},get target(){return this.keyEventTarget;},/**
     * @type {!Object}
     */keyBindings:{'enter:keydown':'_onEnterKeydown','space:keydown':'_onSpaceKeydown','space:keyup':'_onSpaceKeyup'},attached:function attached(){// Set up a11yKeysBehavior to listen to key events on the target,
// so that space and enter activate the ripple even if the target doesn't
// handle key events. The key handlers deal with `noink` themselves.
if(this.parentNode.nodeType==11){// DOCUMENT_FRAGMENT_NODE
this.keyEventTarget=dom(this).getOwnerRoot().host;}else{this.keyEventTarget=this.parentNode;}var keyEventTarget=/** @type {!EventTarget} */this.keyEventTarget;this.listen(keyEventTarget,'up','uiUpAction');this.listen(keyEventTarget,'down','uiDownAction');},detached:function detached(){this.unlisten(this.keyEventTarget,'up','uiUpAction');this.unlisten(this.keyEventTarget,'down','uiDownAction');this.keyEventTarget=null;},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return true;}}return false;},simulatedRipple:function simulatedRipple(){this.downAction(null);// Please see polymer/polymer#1305
this.async(function(){this.upAction();},1);},/**
     * Provokes a ripple down effect via a UI event,
     * respecting the `noink` property.
     * @param {Event=} event
     */uiDownAction:function uiDownAction(event){if(!this.noink){this.downAction(event);}},/**
     * Provokes a ripple down effect via a UI event,
     * *not* respecting the `noink` property.
     * @param {Event=} event
     */downAction:function downAction(event){if(this.holdDown&&this.ripples.length>0){return;}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=true;this.animate();}},/**
     * Provokes a ripple up effect via a UI event,
     * respecting the `noink` property.
     * @param {Event=} event
     */uiUpAction:function uiUpAction(event){if(!this.noink){this.upAction(event);}},/**
     * Provokes a ripple up effect via a UI event,
     * *not* respecting the `noink` property.
     * @param {Event=} event
     */upAction:function upAction(event){if(this.holdDown){return;}this.ripples.forEach(function(ripple){ripple.upAction(event);});this._animating=true;this.animate();},onAnimationComplete:function onAnimationComplete(){this._animating=false;this.$.background.style.backgroundColor=null;this.fire('transitionend');},addRipple:function addRipple(){var ripple=new Ripple(this);dom(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(true);return ripple;},removeRipple:function removeRipple(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(rippleIndex<0){return;}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(false);}},/**
     * Deprecated. Please use animateRipple() instead.
     *
     * This method name conflicts with Element#animate().
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
     *
     * @suppress {checkTypes}
     */animate:function animate(){if(!this._animating){return;}var index;var ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple);}}if(!this.shouldKeepAnimating&&this.ripples.length===0){this.onAnimationComplete();}else{window.requestAnimationFrame(this._boundAnimate);}},/**
     * An alias for animate() whose name does not conflict with the platform
     * Element.animate() method.
     */animateRipple:function animateRipple(){return this.animate();},_onEnterKeydown:function _onEnterKeydown(){this.uiDownAction();this.async(this.uiUpAction,1);},_onSpaceKeydown:function _onSpaceKeydown(){this.uiDownAction();},_onSpaceKeyup:function _onSpaceKeyup(){this.uiUpAction();},// note: holdDown does not respect noink since it can be a focus based
// effect.
_holdDownChanged:function _holdDownChanged(newVal,oldVal){if(oldVal===undefined){return;}if(newVal){this.downAction();}else{this.upAction();}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.

    @event transitionend
    @param {{node: Object}} detail Contains the animated node.
    */});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * `PaperRippleBehavior` dynamically implements a ripple when the element has
   * focus via pointer or keyboard.
   *
   * NOTE: This behavior is intended to be used in conjunction with and after
   * `IronButtonState` and `IronControlState`.
   *
   * @polymerBehavior PaperRippleBehavior
   */var PaperRippleBehavior={properties:{/**
       * If true, the element will not produce a ripple effect when interacted
       * with via the pointer.
       */noink:{type:Boolean,observer:'_noinkChanged'},/**
       * @type {Element|undefined}
       */_rippleContainer:{type:Object}},/**
     * Ensures a `<paper-ripple>` element is available when the element is
     * focused.
     */_buttonStateChanged:function _buttonStateChanged(){if(this.focused){this.ensureRipple();}},/**
     * In addition to the functionality provided in `IronButtonState`, ensures
     * a ripple effect is created when the element is in a `pressed` state.
     */_downHandler:function _downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event);}},/**
     * Ensures this element contains a ripple effect. For startup efficiency
     * the ripple effect is dynamically on demand when needed.
     * @param {!Event=} optTriggeringEvent (optional) event that triggered the
     * ripple.
     */ensureRipple:function ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple);}if(optTriggeringEvent){// Check if the event happened inside of the ripple container
// Fall back to host instead of the root because distributed text
// nodes are not valid event targets
var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(/** @type {Node} */target)){this._ripple.uiDownAction(optTriggeringEvent);}}}},/**
     * Returns the `<paper-ripple>` element used by this element to create
     * ripple effects. The element's ripple is created on demand, when
     * necessary, and calling this method will force the
     * ripple to be created.
     */getRipple:function getRipple(){this.ensureRipple();return this._ripple;},/**
     * Returns true if this element currently contains a ripple effect.
     * @return {boolean}
     */hasRipple:function hasRipple(){return Boolean(this._ripple);},/**
     * Create the element's ripple effect via creating a `<paper-ripple>`.
     * Override this method to customize the ripple element.
     * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
     */_createRipple:function _createRipple(){var element=/** @type {!PaperRippleElement} */document.createElement('paper-ripple');return element;},_noinkChanged:function _noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink;}}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /** @polymerBehavior PaperButtonBehavior */var PaperButtonBehaviorImpl={properties:{/**
       * The z-depth of this element, from 0-5. Setting to 0 will remove the
       * shadow, and each increasing number greater than 0 will be "deeper"
       * than the last.
       *
       * @attribute elevation
       * @type number
       * @default 1
       */elevation:{type:Number,reflectToAttribute:true,readOnly:true}},observers:['_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)','_computeKeyboardClass(receivedFocusFromKeyboard)'],hostAttributes:{role:'button',tabindex:'0',animated:true},_calculateElevation:function _calculateElevation(){var e=1;if(this.disabled){e=0;}else if(this.active||this.pressed){e=4;}else if(this.receivedFocusFromKeyboard){e=3;}this._setElevation(e);},_computeKeyboardClass:function _computeKeyboardClass(receivedFocusFromKeyboard){this.toggleClass('keyboard-focus',receivedFocusFromKeyboard);},/**
     * In addition to `IronButtonState` behavior, when space key goes down,
     * create a ripple down effect.
     *
     * @param {!KeyboardEvent} event .
     */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){IronButtonStateImpl._spaceKeyDownHandler.call(this,event);// Ensure that there is at most one ripple when the space key is held down.
if(this.hasRipple()&&this.getRipple().ripples.length<1){this._ripple.uiDownAction();}},/**
     * In addition to `IronButtonState` behavior, when space key goes up,
     * create a ripple up effect.
     *
     * @param {!KeyboardEvent} event .
     */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction();}}};/** @polymerBehavior */var PaperButtonBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperButtonBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$4=html(_templateObject8_593e7270f77111e88ec25b7f4da4f001());template$4.setAttribute('strip-whitespace','');/**
  Material design:
  [Buttons](https://www.google.com/design/spec/components/buttons.html)

  `paper-button` is a button. When the user touches the button, a ripple effect
  emanates from the point of contact. It may be flat or raised. A raised button is
  styled with a shadow.

  Example:

      <paper-button>Flat button</paper-button>
      <paper-button raised>Raised button</paper-button>
      <paper-button noink>No ripple effect</paper-button>
      <paper-button toggles>Toggle-able button</paper-button>

  A button that has `toggles` true will remain `active` after being clicked (and
  will have an `active` attribute set). For more information, see the
  `IronButtonState` behavior.

  You may use custom DOM in the button body to create a variety of buttons. For
  example, to create a button with an icon and some text:

      <paper-button>
        <iron-icon icon="favorite"></iron-icon>
        custom button content
      </paper-button>

  To use `paper-button` as a link, wrap it in an anchor tag. Since `paper-button`
  will already receive focus, you may want to prevent the anchor tag from
  receiving focus as well by setting its tabindex to -1.

      <a href="https://www.polymer-project.org/" tabindex="-1">
        <paper-button raised>Polymer Project</paper-button>
      </a>

  ### Styling

  Style the button with CSS as you would a normal DOM element.

      paper-button.fancy {
        background: green;
        color: yellow;
      }

      paper-button.fancy:hover {
        background: lime;
      }

      paper-button[disabled],
      paper-button[toggles][active] {
        background: red;
      }

  By default, the ripple is the same color as the foreground at 25% opacity. You
  may customize the color using the `--paper-button-ink-color` custom property.

  The following custom properties and mixins are also available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-button-ink-color` | Background color of the ripple | `Based on the button's color`
  `--paper-button` | Mixin applied to the button | `{}`
  `--paper-button-disabled` | Mixin applied to the disabled button. Note that you can also use the `paper-button[disabled]` selector | `{}`
  `--paper-button-flat-keyboard-focus` | Mixin applied to a flat button after it's been focused using the keyboard | `{}`
  `--paper-button-raised-keyboard-focus` | Mixin applied to a raised button after it's been focused using the keyboard | `{}`

  @demo demo/index.html
  */Polymer({_template:template$4,is:'paper-button',behaviors:[PaperButtonBehavior],properties:{/**
       * If true, the button should be styled with a shadow.
       */raised:{type:Boolean,reflectToAttribute:true,value:false,observer:'_calculateElevation'}},_calculateElevation:function _calculateElevation(){if(!this.raised){this._setElevation(0);}else{PaperButtonBehaviorImpl._calculateElevation.apply(this);}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.

    @event transitionend
    Event param: {{node: Object}} detail Contains the animated node.
    */});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  `iron-a11y-announcer` is a singleton element that is intended to add a11y
  to features that require on-demand announcement from screen readers. In
  order to make use of the announcer, it is best to request its availability
  in the announcing element.

  Example:

      Polymer({

        is: 'x-chatty',

        attached: function() {
          // This will create the singleton element if it has not
          // been created yet:
          Polymer.IronA11yAnnouncer.requestAvailability();
        }
      });

  After the `iron-a11y-announcer` has been made available, elements can
  make announces by firing bubbling `iron-announce` events.

  Example:

      this.fire('iron-announce', {
        text: 'This is an announcement!'
      }, { bubbles: true });

  Note: announcements are only audible if you have a screen reader enabled.

  @group Iron Elements
  @demo demo/index.html
  */var IronA11yAnnouncer=Polymer({_template:html(_templateObject9_593e7270f77111e88ec25b7f4da4f001()),is:'iron-a11y-announcer',properties:{/**
       * The value of mode is used to set the `aria-live` attribute
       * for the element that will be announced. Valid values are: `off`,
       * `polite` and `assertive`.
       */mode:{type:String,value:'polite'},_text:{type:String,value:''}},created:function created(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this;}document.body.addEventListener('iron-announce',this._onIronAnnounce.bind(this));},/**
     * Cause a text string to be announced by screen readers.
     *
     * @param {string} text The text that should be announced.
     */announce:function announce(text){this._text='';this.async(function(){this._text=text;},100);},_onIronAnnounce:function _onIronAnnounce(event){if(event.detail&&event.detail.text){this.announce(event.detail.text);}}});IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement('iron-a11y-announcer');}document.body.appendChild(IronA11yAnnouncer.instance);};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var IronMeta=/*#__PURE__*/function(){/**
     * @param {{
     *   type: (string|null|undefined),
     *   key: (string|null|undefined),
     *   value: *,
     * }=} options
     */function IronMeta(options){_classCallCheck(this,IronMeta);IronMeta[' '](options);/** @type {string} */this.type=options&&options.type||'default';/** @type {string|null|undefined} */this.key=options&&options.key;if(options&&'value'in options){/** @type {*} */this.value=options.value;}}/** @return {*} */_createClass(IronMeta,[{key:"byKey",/**
     * @param {string} key
     * @return {*}
     */value:function byKey(key){this.key=key;return this.value;}},{key:"value",get:function get(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key];}}/** @param {*} value */,set:function set(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key];}else{type[key]=value;}}}/** @return {!Array<*>} */},{key:"list",get:function get(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[];}return Object.keys(items).map(function(key){return metaDatas[this.type][key];},this);}}}]);return IronMeta;}();// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[' ']=function(){};IronMeta.types={};var metaDatas=IronMeta.types;/**
  `iron-meta` is a generic element you can use for sharing information across the
  DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
  such that any instance of iron-meta has access to the shared information. You
  can use `iron-meta` to share whatever you want (or create an extension [like
  x-meta] for enhancements).

  The `iron-meta` instances containing your actual data can be loaded in an
  import, or constructed in any way you see fit. The only requirement is that you
  create them before you try to access them.

  Examples:

  If I create an instance like this:

      <iron-meta key="info" value="foo/bar"></iron-meta>

  Note that value="foo/bar" is the metadata I've defined. I could define more
  attributes or use child nodes to define additional metadata.

  Now I can access that element (and it's metadata) from any iron-meta instance
  via the byKey method, e.g.

      meta.byKey('info');

  Pure imperative form would be like:

      document.createElement('iron-meta').byKey('info');

  Or, in a Polymer element, you can include a meta in your template:

      <iron-meta id="meta"></iron-meta>
      ...
      this.$.meta.byKey('info');

  @group Iron Elements
  @demo demo/index.html
  @element iron-meta
  */Polymer({is:'iron-meta',properties:{/**
       * The type of meta-data.  All meta-data of the same type is stored
       * together.
       * @type {string}
       */type:{type:String,value:'default'},/**
       * The key used to store `value` under the `type` namespace.
       * @type {?string}
       */key:{type:String},/**
       * The meta-data to store or retrieve.
       * @type {*}
       */value:{type:String,notify:true},/**
       * If true, `value` is set to the iron-meta instance itself.
       */self:{type:Boolean,observer:'_selfChanged'},__meta:{type:Boolean,computed:'__computeMeta(type, key, value)'}},hostAttributes:{hidden:true},__computeMeta:function __computeMeta(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value;}else if(this.value!==meta.value){this.value=meta.value;}return meta;},get list(){return this.__meta&&this.__meta.list;},_selfChanged:function _selfChanged(self){if(self){this.value=this;}},/**
     * Retrieves meta data value by key.
     *
     * @method byKey
     * @param {string} key The key of the meta-data to be returned.
     * @return {*}
     */byKey:function byKey(key){return new IronMeta({type:this.type,key:key}).value;}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Singleton IronMeta instance.
   */var IronValidatableBehaviorMeta=null;/**
   * `Use IronValidatableBehavior` to implement an element that validates
   * user input. Use the related `IronValidatorBehavior` to add custom
   * validation logic to an iron-input.
   *
   * By default, an `<iron-form>` element validates its fields when the user
   * presses the submit button. To validate a form imperatively, call the form's
   * `validate()` method, which in turn will call `validate()` on all its
   * children. By using `IronValidatableBehavior`, your custom element
   * will get a public `validate()`, which will return the validity of the
   * element, and a corresponding `invalid` attribute, which can be used for
   * styling.
   *
   * To implement the custom validation logic of your element, you must override
   * the protected `_getValidity()` method of this behaviour, rather than
   * `validate()`. See
   * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
   * for an example.
   *
   * ### Accessibility
   *
   * Changing the `invalid` property, either manually or by calling `validate()`
   * will update the `aria-invalid` attribute.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */var IronValidatableBehavior={properties:{/**
       * Name of the validator to use.
       */validator:{type:String},/**
       * True if the last call to `validate` is invalid.
       */invalid:{notify:true,reflectToAttribute:true,type:Boolean,value:false,observer:'_invalidChanged'}},registered:function registered(){IronValidatableBehaviorMeta=new IronMeta({type:'validator'});},_invalidChanged:function _invalidChanged(){if(this.invalid){this.setAttribute('aria-invalid','true');}else{this.removeAttribute('aria-invalid');}},/* Recompute this every time it's needed, because we don't know if the
     * underlying IronValidatableBehaviorMeta has changed. */get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator);},/**
     * @return {boolean} True if the validator `validator` exists.
     */hasValidator:function hasValidator(){return this._validator!=null;},/**
     * Returns true if the `value` is valid, and updates `invalid`. If you want
     * your element to have custom validation logic, do not override this method;
     * override `_getValidity(value)` instead.

     * @param {Object} value Deprecated: The value to be validated. By default,
     * it is passed to the validator's `validate()` function, if a validator is
     set.
     * If this argument is not specified, then the element's `value` property
     * is used, if it exists.
     * @return {boolean} True if `value` is valid.
     */validate:function validate(value){// If this is an element that also has a value property, and there was
// no explicit value argument passed, use the element's property instead.
if(value===undefined&&this.value!==undefined)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return!this.invalid;},/**
     * Returns true if `value` is valid.  By default, it is passed
     * to the validator's `validate()` function, if a validator is set. You
     * should override this method if you want to implement custom validity
     * logic for your element.
     *
     * @param {Object} value The value to be validated.
     * @return {boolean} True if `value` is valid.
     */_getValidity:function _getValidity(value){if(this.hasValidator()){return this._validator.validate(value);}return true;}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  `<iron-input>` is a wrapper to a native `<input>` element, that adds two-way
  binding and prevention of invalid input. To use it, you must distribute a native
  `<input>` yourself. You can continue to use the native `input` as you would
  normally:

      <iron-input>
        <input>
      </iron-input>

      <iron-input>
        <input type="email" disabled>
      </iron-input>

  ### Two-way binding

  By default you can only get notified of changes to a native `<input>`'s `value`
  due to user input:

      <input value="{{myValue::input}}">

  This means that if you imperatively set the value (i.e. `someNativeInput.value =
  'foo'`), no events will be fired and this change cannot be observed.

  `iron-input` adds the `bind-value` property that mirrors the native `input`'s
  '`value` property; this property can be used for two-way data binding.
  `bind-value` will notify if it is changed either by user input or by script.

      <iron-input bind-value="{{myValue}}">
        <input>
      </iron-input>

  Note: this means that if you want to imperatively set the native `input`'s, you
  _must_ set `bind-value` instead, so that the wrapper `iron-input` can be
  notified.

  ### Validation

  `iron-input` uses the native `input`'s validation. For simplicity, `iron-input`
  has a `validate()` method (which internally just checks the distributed
  `input`'s validity), which sets an `invalid` attribute that can also be used for
  styling.

  To validate automatically as you type, you can use the `auto-validate`
  attribute.

  `iron-input` also fires an `iron-input-validate` event after `validate()` is
  called. You can use it to implement a custom validator:

      var CatsOnlyValidator = {
        validate: function(ironInput) {
          var valid = !ironInput.bindValue || ironInput.bindValue === 'cat';
          ironInput.invalid = !valid;
          return valid;
        }
      }
      ironInput.addEventListener('iron-input-validate', function() {
        CatsOnly.validate(input2);
      });

  You can also use an element implementing an
  [`IronValidatorBehavior`](/element/PolymerElements/iron-validatable-behavior).
  This example can also be found in the demo for this element:

      <iron-input validator="cats-only">
        <input>
      </iron-input>

  ### Preventing invalid input

  It may be desirable to only allow users to enter certain characters. You can use
  the `allowed-pattern` attribute to accomplish this. This feature is separate
  from validation, and `allowed-pattern` does not affect how the input is
  validated.

      // Only allow typing digits, but a valid input has exactly 5 digits.
      <iron-input allowed-pattern="[0-9]">
        <input pattern="\d{5}">
      </iron-input>

  @demo demo/index.html
  */Polymer({_template:html(_templateObject10_593e7270f77111e88ec25b7f4da4f001()),is:'iron-input',behaviors:[IronValidatableBehavior],/**
     * Fired whenever `validate()` is called.
     *
     * @event iron-input-validate
     */properties:{/**
       * Use this property instead of `value` for two-way data binding, or to
       * set a default value for the input. **Do not** use the distributed
       * input's `value` property to set a default value.
       */bindValue:{type:String,value:''},/**
       * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
       * backcompatibility, if you were one-way binding to the Polymer 1.0
       * `input is="iron-input"` value attribute).
       */value:{type:String,computed:'_computeValue(bindValue)'},/**
       * Regex-like list of characters allowed as input; all characters not in the
       * list will be rejected. The recommended format should be a list of allowed
       * characters, for example, `[a-zA-Z0-9.+-!;:]`.
       *
       * This pattern represents the allowed characters for the field; as the user
       * inputs text, each individual character will be checked against the
       * pattern (rather than checking the entire value as a whole). If a
       * character is not a match, it will be rejected.
       *
       * Pasted input will have each character checked individually; if any
       * character doesn't match `allowedPattern`, the entire pasted string will
       * be rejected.
       *
       * Note: if you were using `iron-input` in 1.0, you were also required to
       * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
       * and will be set automatically for you if an `allowedPattern` is provided.
       *
       */allowedPattern:{type:String},/**
       * Set to true to auto-validate the input value as you type.
       */autoValidate:{type:Boolean,value:false},/**
       * The native input element.
       */_inputElement:Object},observers:['_bindValueChanged(bindValue, _inputElement)'],listeners:{'input':'_onInput','keypress':'_onKeypress'},created:function created(){IronA11yAnnouncer.requestAvailability();this._previousValidInput='';this._patternAlreadyChecked=false;},attached:function attached(){// If the input is added at a later time, update the internal reference.
this._observer=dom(this).observeNodes(function(info){this._initSlottedInput();}.bind(this));},detached:function detached(){if(this._observer){dom(this).unobserveNodes(this._observer);this._observer=null;}},/**
     * Returns the distributed input element.
     */get inputElement(){return this._inputElement;},_initSlottedInput:function _initSlottedInput(){this._inputElement=this.getEffectiveChildren()[0];if(this.inputElement&&this.inputElement.value){this.bindValue=this.inputElement.value;}this.fire('iron-input-ready');},get _patternRegExp(){var pattern;if(this.allowedPattern){pattern=new RegExp(this.allowedPattern);}else{switch(this.inputElement.type){case'number':pattern=/[0-9.,e-]/;break;}}return pattern;},/**
     * @suppress {checkTypes}
     */_bindValueChanged:function _bindValueChanged(bindValue,inputElement){// The observer could have run before attached() when we have actually
// initialized this property.
if(!inputElement){return;}if(bindValue===undefined){inputElement.value=null;}else if(bindValue!==inputElement.value){this.inputElement.value=bindValue;}if(this.autoValidate){this.validate();}// manually notify because we don't want to notify until after setting value
this.fire('bind-value-changed',{value:bindValue});},_onInput:function _onInput(){// Need to validate each of the characters pasted if they haven't
// been validated inside `_onKeypress` already.
if(this.allowedPattern&&!this._patternAlreadyChecked){var valid=this._checkPatternValidity();if(!valid){this._announceInvalidCharacter('Invalid string of characters not entered.');this.inputElement.value=this._previousValidInput;}}this.bindValue=this._previousValidInput=this.inputElement.value;this._patternAlreadyChecked=false;},_isPrintable:function _isPrintable(event){// What a control/printable character is varies wildly based on the browser.
// - most control characters (arrows, backspace) do not send a `keypress`
// event
//   in Chrome, but the *do* on Firefox
// - in Firefox, when they do send a `keypress` event, control chars have
//   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
// - printable characters always send a keypress event.
// - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
// keyCode
//   always matches the charCode.
// None of this makes any sense.
// For these keys, ASCII code == browser keycode.
var anyNonPrintable=event.keyCode==8||// backspace
event.keyCode==9||// tab
event.keyCode==13||// enter
event.keyCode==27;// escape
// For these keys, make sure it's a browser keycode and not an ASCII code.
var mozNonPrintable=event.keyCode==19||// pause
event.keyCode==20||// caps lock
event.keyCode==45||// insert
event.keyCode==46||// delete
event.keyCode==144||// num lock
event.keyCode==145||// scroll lock
event.keyCode>32&&event.keyCode<41||// page up/down, end, home, arrows
event.keyCode>111&&event.keyCode<124;// fn keys
return!anyNonPrintable&&!(event.charCode==0&&mozNonPrintable);},_onKeypress:function _onKeypress(event){if(!this.allowedPattern&&this.inputElement.type!=='number'){return;}var regexp=this._patternRegExp;if(!regexp){return;}// Handle special keys and backspace
if(event.metaKey||event.ctrlKey||event.altKey){return;}// Check the pattern either here or in `_onInput`, but not in both.
this._patternAlreadyChecked=true;var thisChar=String.fromCharCode(event.charCode);if(this._isPrintable(event)&&!regexp.test(thisChar)){event.preventDefault();this._announceInvalidCharacter('Invalid character '+thisChar+' not entered.');}},_checkPatternValidity:function _checkPatternValidity(){var regexp=this._patternRegExp;if(!regexp){return true;}for(var i=0;i<this.inputElement.value.length;i++){if(!regexp.test(this.inputElement.value[i])){return false;}}return true;},/**
     * Returns true if `value` is valid. The validator provided in `validator`
     * will be used first, then any constraints.
     * @return {boolean} True if the value is valid.
     */validate:function validate(){if(!this.inputElement){this.invalid=false;return true;}// Use the nested input's native validity.
var valid=this.inputElement.checkValidity();// Only do extra checking if the browser thought this was valid.
if(valid){// Empty, required input is invalid
if(this.required&&this.bindValue===''){valid=false;}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.bindValue);}}this.invalid=!valid;this.fire('iron-input-validate');return valid;},_announceInvalidCharacter:function _announceInvalidCharacter(message){this.fire('iron-announce',{text:message});},_computeValue:function _computeValue(bindValue){return bindValue;}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ // Give the user the choice to opt out of font loading.
if(!window.polymerSkipLoadingFontRoboto){var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.crossOrigin='anonymous';link.href='https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic';document.head.appendChild(link);}/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$5=html(_templateObject11_593e7270f77111e88ec25b7f4da4f001());template$5.setAttribute('style','display: none;');document.head.appendChild(template$5.content);/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Use `Polymer.PaperInputAddonBehavior` to implement an add-on for
   * `<paper-input-container>`. A add-on appears below the input, and may display
   * information based on the input value and validity such as a character counter
   * or an error message.
   * @polymerBehavior
   */var PaperInputAddonBehavior={attached:function attached(){this.fire('addon-attached');},/**
     * The function called by `<paper-input-container>` when the input value or
     * validity changes.
     * @param {{
     *   invalid: boolean,
     *   inputElement: (Element|undefined),
     *   value: (string|undefined)
     * }} state -
     *     inputElement: The input element.
     *     value: The input value.
     *     invalid: True if the input value is invalid.
     */update:function update(state){}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /*
  `<paper-input-char-counter>` is a character counter for use with
  `<paper-input-container>`. It shows the number of characters entered in the
  input and the max length if it is specified.

      <paper-input-container>
        <input maxlength="20">
        <paper-input-char-counter></paper-input-char-counter>
      </paper-input-container>

  ### Styling

  The following mixin is available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-input-char-counter` | Mixin applied to the element | `{}`
  */Polymer({_template:html(_templateObject12_593e7270f77111e88ec25b7f4da4f001()),is:'paper-input-char-counter',behaviors:[PaperInputAddonBehavior],properties:{_charCounterStr:{type:String,value:'0'}},/**
     * This overrides the update function in PaperInputAddonBehavior.
     * @param {{
     *   inputElement: (Element|undefined),
     *   value: (string|undefined),
     *   invalid: boolean
     * }} state -
     *     inputElement: The input element.
     *     value: The input value.
     *     invalid: True if the input value is invalid.
     */update:function update(state){if(!state.inputElement){return;}state.value=state.value||'';var counter=state.value.toString().length.toString();if(state.inputElement.hasAttribute('maxlength')){counter+='/'+state.inputElement.getAttribute('maxlength');}this._charCounterStr=counter;}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$6=html(_templateObject13_593e7270f77111e88ec25b7f4da4f001());template$6.setAttribute('style','display: none;');document.head.appendChild(template$6.content);/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$7=html(_templateObject14_593e7270f77111e88ec25b7f4da4f001());template$7.setAttribute('style','display: none;');document.head.appendChild(template$7.content);/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$8=html(_templateObject15_593e7270f77111e88ec25b7f4da4f001());template$8.setAttribute('style','display: none;');document.head.appendChild(template$8.content);/*
  `<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
  `<textarea>` and optional add-on elements such as an error message or character
  counter, used to implement Material Design text fields.

  For example:

      <paper-input-container>
        <label slot="label">Your name</label>
        <iron-input slot="input">
          <input>
        </iron-input>
        // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
  instead of the above.
      </paper-input-container>

  You can style the nested `<input>` however you want; if you want it to look like
  a Material Design input, you can style it with the
  --paper-input-container-shared-input-style mixin.

  Do not wrap `<paper-input-container>` around elements that already include it,
  such as `<paper-input>`. Doing so may cause events to bounce infinitely between
  the container and its contained element.

  ### Listening for input changes

  By default, it listens for changes on the `bind-value` attribute on its children
  nodes and perform tasks such as auto-validating and label styling when the
  `bind-value` changes. You can configure the attribute it listens to with the
  `attr-for-value` attribute.

  ### Using a custom input element

  You can use a custom input element in a `<paper-input-container>`, for example
  to implement a compound input field like a social security number input. The
  custom input element should have the `paper-input-input` class, have a
  `notify:true` value property and optionally implements
  `Polymer.IronValidatableBehavior` if it is validatable.

      <paper-input-container attr-for-value="ssn-value">
        <label slot="label">Social security number</label>
        <ssn-input slot="input" class="paper-input-input"></ssn-input>
      </paper-input-container>


  If you're using a `<paper-input-container>` imperatively, it's important to make
  sure that you attach its children (the `iron-input` and the optional `label`)
  before you attach the `<paper-input-container>` itself, so that it can be set up
  correctly.

  ### Validation

  If the `auto-validate` attribute is set, the input container will validate the
  input and update the container styling when the input value changes.

  ### Add-ons

  Add-ons are child elements of a `<paper-input-container>` with the `add-on`
  attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
  are notified when the input value or validity changes, and may implement
  functionality such as error messages or character counters. They appear at the
  bottom of the input.

  ### Prefixes and suffixes
  These are child elements of a `<paper-input-container>` with the `prefix`
  or `suffix` attribute, and are displayed inline with the input, before or after.

      <paper-input-container>
        <div slot="prefix">$</div>
        <label slot="label">Total</label>
        <iron-input slot="input">
          <input>
        </iron-input>
        // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
  instead of the above. <paper-icon-button slot="suffix"
  icon="clear"></paper-icon-button>
      </paper-input-container>

  ### Styling

  The following custom properties and mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
  `--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
  `--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
  `--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
  `--paper-input-container` | Mixin applied to the container | `{}`
  `--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
  `--paper-input-container-label` | Mixin applied to the label | `{}`
  `--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
  `--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
  `--paper-input-container-input` | Mixin applied to the input | `{}`
  `--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
  `--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
  `--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
  `--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
  `--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
  `--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
  `--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
  `--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
  `--paper-input-container-underline` | Mixin applied to the underline | `{}`
  `--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
  `--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
  `--paper-input-prefix` | Mixin applied to the input prefix | `{}`
  `--paper-input-suffix` | Mixin applied to the input suffix | `{}`

  This element is `display:block` by default, but you can set the `inline`
  attribute to make it `display:inline-block`.
  */Polymer({_template:html(_templateObject16_593e7270f77111e88ec25b7f4da4f001()),is:'paper-input-container',properties:{/**
       * Set to true to disable the floating label. The label disappears when the
       * input value is not null.
       */noLabelFloat:{type:Boolean,value:false},/**
       * Set to true to always float the floating label.
       */alwaysFloatLabel:{type:Boolean,value:false},/**
       * The attribute to listen for value changes on.
       */attrForValue:{type:String,value:'bind-value'},/**
       * Set to true to auto-validate the input value when it changes.
       */autoValidate:{type:Boolean,value:false},/**
       * True if the input is invalid. This property is set automatically when the
       * input value changes if auto-validating, or when the `iron-input-validate`
       * event is heard from a child.
       */invalid:{observer:'_invalidChanged',type:Boolean,value:false},/**
       * True if the input has focus.
       */focused:{readOnly:true,type:Boolean,value:false,notify:true},_addons:{type:Array// do not set a default value here intentionally - it will be initialized
// lazily when a distributed child is attached, which may occur before
// configuration for this element in polyfill.
},_inputHasContent:{type:Boolean,value:false},_inputSelector:{type:String,value:'input,iron-input,textarea,.paper-input-input'},_boundOnFocus:{type:Function,value:function value(){return this._onFocus.bind(this);}},_boundOnBlur:{type:Function,value:function value(){return this._onBlur.bind(this);}},_boundOnInput:{type:Function,value:function value(){return this._onInput.bind(this);}},_boundValueChanged:{type:Function,value:function value(){return this._onValueChanged.bind(this);}}},listeners:{'addon-attached':'_onAddonAttached','iron-input-validate':'_onIronInputValidate'},get _valueChangedEvent(){return this.attrForValue+'-changed';},get _propertyForValue(){return dashToCamelCase(this.attrForValue);},get _inputElement(){return dom(this).querySelector(this._inputSelector);},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value;},ready:function ready(){// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. We need to track whether the first time we
// encounter the value is basically this first time, so that we can validate
// it correctly the rest of the time. See
// https://github.com/PolymerElements/paper-input/issues/605
this.__isFirstValueUpdate=true;if(!this._addons){this._addons=[];}this.addEventListener('focus',this._boundOnFocus,true);this.addEventListener('blur',this._boundOnBlur,true);},attached:function attached(){if(this.attrForValue){this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged);}else{this.addEventListener('input',this._onInput);}// Only validate when attached if the input already has a value.
if(this._inputElementValue&&this._inputElementValue!=''){this._handleValueAndAutoValidate(this._inputElement);}else{this._handleValue(this._inputElement);}},/** @private */_onAddonAttached:function _onAddonAttached(event){if(!this._addons){this._addons=[];}var target=event.target;if(this._addons.indexOf(target)===-1){this._addons.push(target);if(this.isAttached){this._handleValue(this._inputElement);}}},/** @private */_onFocus:function _onFocus(){this._setFocused(true);},/** @private */_onBlur:function _onBlur(){this._setFocused(false);this._handleValueAndAutoValidate(this._inputElement);},/** @private */_onInput:function _onInput(event){this._handleValueAndAutoValidate(event.target);},/** @private */_onValueChanged:function _onValueChanged(event){var input=event.target;// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. If this is in fact the bootup case, ignore
// validation, just this once.
if(this.__isFirstValueUpdate){this.__isFirstValueUpdate=false;if(input.value===undefined||input.value===''){return;}}this._handleValueAndAutoValidate(event.target);},/** @private */_handleValue:function _handleValue(inputElement){var value=this._inputElementValue;// type="number" hack needed because this.value is empty until it's valid
if(value||value===0||inputElement.type==='number'&&!inputElement.checkValidity()){this._inputHasContent=true;}else{this._inputHasContent=false;}this.updateAddons({inputElement:inputElement,value:value,invalid:this.invalid});},/** @private */_handleValueAndAutoValidate:function _handleValueAndAutoValidate(inputElement){if(this.autoValidate&&inputElement){var valid;if(inputElement.validate){valid=inputElement.validate(this._inputElementValue);}else{valid=inputElement.checkValidity();}this.invalid=!valid;}// Call this last to notify the add-ons.
this._handleValue(inputElement);},/** @private */_onIronInputValidate:function _onIronInputValidate(event){this.invalid=this._inputElement.invalid;},/** @private */_invalidChanged:function _invalidChanged(){if(this._addons){this.updateAddons({invalid:this.invalid});}},/**
     * Call this to update the state of add-ons.
     * @param {Object} state Add-on state.
     */updateAddons:function updateAddons(state){for(var addon,index=0;addon=this._addons[index];index++){addon.update(state);}},/** @private */_computeInputContentClass:function _computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent){var cls='input-content';if(!noLabelFloat){var label=this.querySelector('label');if(alwaysFloatLabel||_inputHasContent){cls+=' label-is-floating';// If the label is floating, ignore any offsets that may have been
// applied from a prefix element.
this.$.labelAndInputContainer.style.position='static';if(invalid){cls+=' is-invalid';}else if(focused){cls+=' label-is-highlighted';}}else{// When the label is not floating, it should overlap the input element.
if(label){this.$.labelAndInputContainer.style.position='relative';}if(invalid){cls+=' is-invalid';}}}else{if(_inputHasContent){cls+=' label-is-hidden';}if(invalid){cls+=' is-invalid';}}if(focused){cls+=' focused';}return cls;},/** @private */_computeUnderlineClass:function _computeUnderlineClass(focused,invalid){var cls='underline';if(invalid){cls+=' is-invalid';}else if(focused){cls+=' is-highlighted';}return cls;},/** @private */_computeAddOnContentClass:function _computeAddOnContentClass(focused,invalid){var cls='add-on-content';if(invalid){cls+=' is-invalid';}else if(focused){cls+=' is-highlighted';}return cls;}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /*
  `<paper-input-error>` is an error message for use with
  `<paper-input-container>`. The error is displayed when the
  `<paper-input-container>` is `invalid`.

      <paper-input-container>
        <input pattern="[0-9]*">
        <paper-input-error slot="add-on">Only numbers are
  allowed!</paper-input-error>
      </paper-input-container>

  ### Styling

  The following custom properties and mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-input-container-invalid-color` | The foreground color of the error | `--error-color`
  `--paper-input-error` | Mixin applied to the error | `{}`
  */Polymer({_template:html(_templateObject17_593e7270f77111e88ec25b7f4da4f001()),is:'paper-input-error',behaviors:[PaperInputAddonBehavior],properties:{/**
       * True if the error is showing.
       */invalid:{readOnly:true,reflectToAttribute:true,type:Boolean}},/**
     * This overrides the update function in PaperInputAddonBehavior.
     * @param {{
     *   inputElement: (Element|undefined),
     *   value: (string|undefined),
     *   invalid: boolean
     * }} state -
     *     inputElement: The input element.
     *     value: The input value.
     *     invalid: True if the input value is invalid.
     */update:function update(state){this._setInvalid(state.invalid);}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
    IronFormElementBehavior adds a `name`, `value` and `required` properties to
    a custom element. It mostly exists for backcompatibility with Polymer 1.x, and
    is probably not something you want to use.

    @demo demo/index.html
    @polymerBehavior
   */var IronFormElementBehavior={properties:{/**
       * The name of this element.
       */name:{type:String},/**
       * The value for this element.
       * @type {*}
       */value:{notify:true,type:String},/**
       * Set to true to mark the input as required. If used in a form, a
       * custom element that uses this behavior should also use
       * IronValidatableBehavior and define a custom validation method.
       * Otherwise, a `required` element will always be considered valid.
       * It's also strongly recommended to provide a visual style for the element
       * when its value is invalid.
       */required:{type:Boolean,value:false}},// Empty implementations for backcompatibility.
attached:function attached(){},detached:function detached(){}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ // Generate unique, monotonically increasing IDs for labels (needed by
// aria-labelledby) and add-ons.
var PaperInputHelper={};PaperInputHelper.NextLabelID=1;PaperInputHelper.NextAddonID=1;PaperInputHelper.NextInputID=1;/**
   * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
   * This behavior is implemented by `<paper-input>`. It exposes a number of
   * properties from `<paper-input-container>` and `<input is="iron-input">` and
   * they should be bound in your template.
   *
   * The input element can be accessed by the `inputElement` property if you need
   * to access properties or methods that are not exposed.
   * @polymerBehavior PaperInputBehavior
   */var PaperInputBehaviorImpl={properties:{/**
       * Fired when the input changes due to user interaction.
       *
       * @event change
       */ /**
       * The label for this input. If you're using PaperInputBehavior to
       * implement your own paper-input-like element, bind this to
       * `<label>`'s content and `hidden` property, e.g.
       * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
       */label:{type:String},/**
       * The value for this input. If you're using PaperInputBehavior to
       * implement your own paper-input-like element, bind this to
       * the `<iron-input>`'s `bindValue`
       * property, or the value property of your input that is `notify:true`.
       * @type {*}
       */value:{notify:true,type:String},/**
       * Set to true to disable this input. If you're using PaperInputBehavior to
       * implement your own paper-input-like element, bind this to
       * both the `<paper-input-container>`'s and the input's `disabled` property.
       */disabled:{type:Boolean,value:false},/**
       * Returns true if the value is invalid. If you're using PaperInputBehavior
       * to implement your own paper-input-like element, bind this to both the
       * `<paper-input-container>`'s and the input's `invalid` property.
       *
       * If `autoValidate` is true, the `invalid` attribute is managed
       * automatically, which can clobber attempts to manage it manually.
       */invalid:{type:Boolean,value:false,notify:true},/**
       * Set this to specify the pattern allowed by `preventInvalidInput`. If
       * you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
       * property.
       */allowedPattern:{type:String},/**
       * The type of the input. The supported types are the
       * [native input's
       * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
       * (Polymer 2)
       * `<iron-input>`'s `type` property.
       */type:{type:String},/**
       * The datalist of the input (if any). This should match the id of an
       * existing `<datalist>`. If you're using PaperInputBehavior to implement
       * your own paper-input-like element, bind this to the `<input
       * is="iron-input">`'s `list` property.
       */list:{type:String},/**
       * A pattern to validate the `input` with. If you're using
       * PaperInputBehavior to implement your own paper-input-like element, bind
       * this to the `<input is="iron-input">`'s `pattern` property.
       */pattern:{type:String},/**
       * Set to true to mark the input as required. If you're using
       * PaperInputBehavior to implement your own paper-input-like element, bind
       * this to the `<input is="iron-input">`'s `required` property.
       */required:{type:Boolean,value:false},/**
       * The error message to display when the input is invalid. If you're using
       * PaperInputBehavior to implement your own paper-input-like element,
       * bind this to the `<paper-input-error>`'s content, if using.
       */errorMessage:{type:String},/**
       * Set to true to show a character counter.
       */charCounter:{type:Boolean,value:false},/**
       * Set to true to disable the floating label. If you're using
       * PaperInputBehavior to implement your own paper-input-like element, bind
       * this to the `<paper-input-container>`'s `noLabelFloat` property.
       */noLabelFloat:{type:Boolean,value:false},/**
       * Set to true to always float the label. If you're using PaperInputBehavior
       * to implement your own paper-input-like element, bind this to the
       * `<paper-input-container>`'s `alwaysFloatLabel` property.
       */alwaysFloatLabel:{type:Boolean,value:false},/**
       * Set to true to auto-validate the input value. If you're using
       * PaperInputBehavior to implement your own paper-input-like element, bind
       * this to the `<paper-input-container>`'s `autoValidate` property.
       */autoValidate:{type:Boolean,value:false},/**
       * Name of the validator to use. If you're using PaperInputBehavior to
       * implement your own paper-input-like element, bind this to
       * the `<input is="iron-input">`'s `validator` property.
       */validator:{type:String},// HTMLInputElement attributes for binding if needed
/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `autocomplete`
       * property.
       */autocomplete:{type:String,value:'off'},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `autofocus`
       * property.
       */autofocus:{type:Boolean,observer:'_autofocusChanged'},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `inputmode`
       * property.
       */inputmode:{type:String},/**
       * The minimum length of the input value.
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `minlength`
       * property.
       */minlength:{type:Number},/**
       * The maximum length of the input value.
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `maxlength`
       * property.
       */maxlength:{type:Number},/**
       * The minimum (numeric or date-time) input value.
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `min` property.
       */min:{type:String},/**
       * The maximum (numeric or date-time) input value.
       * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `max` property.
       */max:{type:String},/**
       * Limits the numeric or date-time increments.
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `step` property.
       */step:{type:String},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `name` property.
       */name:{type:String},/**
       * A placeholder string in addition to the label. If this is set, the label
       * will always float.
       */placeholder:{type:String,// need to set a default so _computeAlwaysFloatLabel is run
value:''},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `readonly`
       * property.
       */readonly:{type:Boolean,value:false},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `size` property.
       */size:{type:Number},// Nonstandard attributes for binding if needed
/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
       * property.
       */autocapitalize:{type:String,value:'none'},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `autocorrect`
       * property.
       */autocorrect:{type:String,value:'off'},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `autosave`
       * property, used with type=search.
       */autosave:{type:String},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `results` property,
       * used with type=search.
       */results:{type:Number},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the `<input is="iron-input">`'s `accept` property,
       * used with type=file.
       */accept:{type:String},/**
       * If you're using PaperInputBehavior to implement your own paper-input-like
       * element, bind this to the`<input is="iron-input">`'s `multiple` property,
       * used with type=file.
       */multiple:{type:Boolean},/** @private */_ariaDescribedBy:{type:String,value:''},/** @private */_ariaLabelledBy:{type:String,value:''},/** @private */_inputId:{type:String,value:''}},listeners:{'addon-attached':'_onAddonAttached'},/**
     * @type {!Object}
     */keyBindings:{'shift+tab:keydown':'_onShiftTabDown'},/** @private */hostAttributes:{tabindex:0},/**
     * Returns a reference to the input element.
     * @return {!HTMLElement}
     */get inputElement(){// Chrome generates audit errors if an <input type="password"> has a
// duplicate ID, which is almost always true in Shady DOM. Generate
// a unique ID instead.
if(!this.$){this.$={};}if(!this.$.input){this._generateInputId();this.$.input=this.$$('#'+this._inputId);}return this.$.input;},/**
     * Returns a reference to the focusable element.
     * @return {!HTMLElement}
     */get _focusableElement(){return this.inputElement;},created:function created(){// These types have some default placeholder text; overlapping
// the label on top of it looks terrible. Auto-float the label in this case.
this._typesThatHaveText=['date','datetime','datetime-local','month','time','week','file'];},attached:function attached(){this._updateAriaLabelledBy();// In the 2.0 version of the element, this is handled in `onIronInputReady`,
// i.e. after the native input has finished distributing. In the 1.0
// version, the input is in the shadow tree, so it's already available.
if(!PolymerElement&&this.inputElement&&this._typesThatHaveText.indexOf(this.inputElement.type)!==-1){this.alwaysFloatLabel=true;}},_appendStringWithSpace:function _appendStringWithSpace(str,more){if(str){str=str+' '+more;}else{str=more;}return str;},_onAddonAttached:function _onAddonAttached(event){var target=dom(event).rootTarget;if(target.id){this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,target.id);}else{var id='paper-input-add-on-'+PaperInputHelper.NextAddonID++;target.id=id;this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,id);}},/**
     * Validates the input element and sets an error style if needed.
     *
     * @return {boolean}
     */validate:function validate(){return this.inputElement.validate();},/**
     * Forward focus to inputElement. Overriden from IronControlState.
     */_focusBlurHandler:function _focusBlurHandler(event){IronControlState._focusBlurHandler.call(this,event);// Forward the focus to the nested input.
if(this.focused&&!this._shiftTabPressed&&this._focusableElement){this._focusableElement.focus();}},/**
     * Handler that is called when a shift+tab keypress is detected by the menu.
     *
     * @param {CustomEvent} event A key combination event.
     */_onShiftTabDown:function _onShiftTabDown(event){var oldTabIndex=this.getAttribute('tabindex');this._shiftTabPressed=true;this.setAttribute('tabindex','-1');this.async(function(){this.setAttribute('tabindex',oldTabIndex);this._shiftTabPressed=false;},1);},/**
     * If `autoValidate` is true, then validates the element.
     */_handleAutoValidate:function _handleAutoValidate(){if(this.autoValidate)this.validate();},/**
     * Restores the cursor to its original position after updating the value.
     * @param {string} newValue The value that should be saved.
     */updateValueAndPreserveCaret:function updateValueAndPreserveCaret(newValue){// Not all elements might have selection, and even if they have the
// right properties, accessing them might throw an exception (like for
// <input type=number>)
try{var start=this.inputElement.selectionStart;this.value=newValue;// The cursor automatically jumps to the end after re-setting the value,
// so restore it to its original position.
this.inputElement.selectionStart=start;this.inputElement.selectionEnd=start;}catch(e){// Just set the value and give up on the caret.
this.value=newValue;}},_computeAlwaysFloatLabel:function _computeAlwaysFloatLabel(alwaysFloatLabel,placeholder){return placeholder||alwaysFloatLabel;},_updateAriaLabelledBy:function _updateAriaLabelledBy(){var label=dom(this.root).querySelector('label');if(!label){this._ariaLabelledBy='';return;}var labelledBy;if(label.id){labelledBy=label.id;}else{labelledBy='paper-input-label-'+PaperInputHelper.NextLabelID++;label.id=labelledBy;}this._ariaLabelledBy=labelledBy;},_generateInputId:function _generateInputId(){if(!this._inputId||this._inputId===''){this._inputId='input-'+PaperInputHelper.NextInputID++;}},_onChange:function _onChange(event){// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
// See
// https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
if(this.shadowRoot){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable});}},_autofocusChanged:function _autofocusChanged(){// Firefox doesn't respect the autofocus attribute if it's applied after
// the page is loaded (Chrome/WebKit do respect it), preventing an
// autofocus attribute specified in markup from taking effect when the
// element is upgraded. As a workaround, if the autofocus property is set,
// and the focus hasn't already been moved elsewhere, we take focus.
if(this.autofocus&&this._focusableElement){// In IE 11, the default document.activeElement can be the page's
// outermost html element, but there are also cases (under the
// polyfill?) in which the activeElement is not a real HTMLElement, but
// just a plain object. We identify the latter case as having no valid
// activeElement.
var activeElement=document.activeElement;var isActiveElementValid=_instanceof(activeElement,HTMLElement);// Has some other element has already taken the focus?
var isSomeElementActive=isActiveElementValid&&activeElement!==document.body&&activeElement!==document.documentElement;/* IE 11 */if(!isSomeElementActive){// No specific element has taken the focus yet, so we can take it.
this._focusableElement.focus();}}}};/** @polymerBehavior */var PaperInputBehavior=[IronControlState,IronA11yKeysBehavior,PaperInputBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  Material design: [Text
  fields](https://www.google.com/design/spec/components/text-fields.html)

  `<paper-input>` is a single-line text field with Material Design styling.

      <paper-input label="Input label"></paper-input>

  It may include an optional error message or character counter.

      <paper-input error-message="Invalid input!" label="Input
  label"></paper-input> <paper-input char-counter label="Input
  label"></paper-input>

  It can also include custom prefix or suffix elements, which are displayed
  before or after the text input itself. In order for an element to be
  considered as a prefix, it must have the `prefix` attribute (and similarly
  for `suffix`).

      <paper-input label="total">
        <div prefix>$</div>
        <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
      </paper-input>

  A `paper-input` can use the native `type=search` or `type=file` features.
  However, since we can't control the native styling of the input (search icon,
  file button, date placeholder, etc.), in these cases the label will be
  automatically floated. The `placeholder` attribute can still be used for
  additional informational text.

      <paper-input label="search!" type="search"
          placeholder="search for cats" autosave="test" results="5">
      </paper-input>

  See `Polymer.PaperInputBehavior` for more API docs.

  ### Focus

  To focus a paper-input, you can call the native `focus()` method as long as the
  paper input has a tab index. Similarly, `blur()` will blur the element.

  ### Styling

  See `Polymer.PaperInputContainer` for a list of custom properties used to
  style this element.

  The following custom properties and mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer reveal button (the eyeball) | {}

  @group Paper Elements
  @element paper-input
  @hero hero.svg
  @demo demo/index.html
  */Polymer({is:'paper-input',_template:html(_templateObject18_593e7270f77111e88ec25b7f4da4f001()),behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{value:{// Required for the correct TypeScript type-generation
type:String}},/**
     * Returns a reference to the focusable element. Overridden from
     * PaperInputBehavior to correctly focus the native input.
     *
     * @return {!HTMLElement}
     */get _focusableElement(){return this.inputElement._inputElement;},// Note: This event is only available in the 1.0 version of this element.
// In 2.0, the functionality of `_onIronInputReady` is done in
// PaperInputBehavior::attached.
listeners:{'iron-input-ready':'_onIronInputReady'},_onIronInputReady:function _onIronInputReady(){// Even though this is only used in the next line, save this for
// backwards compatibility, since the native input had this ID until 2.0.5.
if(!this.$.nativeInput){this.$.nativeInput=this.$$('input');}if(this.inputElement&&this._typesThatHaveText.indexOf(this.$.nativeInput.type)!==-1){this.alwaysFloatLabel=true;}// Only validate when attached if the input already has a value.
if(!!this.inputElement.bindValue){this.$.container._handleValueAndAutoValidate(this.inputElement);}}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * `iron-range-behavior` provides the behavior for something with a minimum to
   * maximum range.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */var IronRangeBehavior={properties:{/**
       * The number that represents the current value.
       */value:{type:Number,value:0,notify:true,reflectToAttribute:true},/**
       * The number that indicates the minimum value of the range.
       */min:{type:Number,value:0,notify:true},/**
       * The number that indicates the maximum value of the range.
       */max:{type:Number,value:100,notify:true},/**
       * Specifies the value granularity of the range's value.
       */step:{type:Number,value:1,notify:true},/**
       * Returns the ratio of the value.
       */ratio:{type:Number,value:0,readOnly:true,notify:true}},observers:['_update(value, min, max, step)'],_calcRatio:function _calcRatio(value){return(this._clampValue(value)-this.min)/(this.max-this.min);},_clampValue:function _clampValue(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)));},_calcStep:function _calcStep(value){// polymer/issues/2493
value=parseFloat(value);if(!this.step){return value;}var numSteps=Math.round((value-this.min)/this.step);if(this.step<1){/**
         * For small values of this.step, if we calculate the step using
         * `Math.round(value / step) * step` we may hit a precision point issue
         * eg. 0.1 * 0.2 =  0.020000000000000004
         * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
         *
         * as a work around we can divide by the reciprocal of `step`
         */return numSteps/(1/this.step)+this.min;}else{return numSteps*this.step+this.min;}},_validateValue:function _validateValue(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v;},_update:function _update(){this._validateValue();this._setRatio(this._calcRatio(this.value)*100);}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  Material design: [Progress &
  activity](https://www.google.com/design/spec/components/progress-activity.html)

  The progress bars are for situations where the percentage completed can be
  determined. They give users a quick sense of how much longer an operation
  will take.

  Example:

      <paper-progress value="10"></paper-progress>

  There is also a secondary progress which is useful for displaying intermediate
  progress, such as the buffer level during a streaming playback progress bar.

  Example:

      <paper-progress value="10" secondary-progress="30"></paper-progress>

  ### Styling progress bar:

  To change the active progress bar color:

      paper-progress {
         --paper-progress-active-color: #e91e63;
      }

  To change the secondary progress bar color:

      paper-progress {
        --paper-progress-secondary-color: #f8bbd0;
      }

  To change the progress bar background color:

      paper-progress {
        --paper-progress-container-color: #64ffda;
      }

  Add the class `transiting` to a paper-progress to animate the progress bar when
  the value changed. You can also customize the transition:

      paper-progress {
        --paper-progress-transition-duration: 0.08s;
        --paper-progress-transition-timing-function: ease;
        --paper-progress-transition-delay: 0s;
      }

  To change the duration of the indeterminate cycle:

      paper-progress {
        --paper-progress-indeterminate-cycle-duration: 2s;
      }

  The following mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|---------
  `--paper-progress-container` | Mixin applied to container | `{}`
  `--paper-progress-transition-duration` | Duration of the transition | `0.08s`
  `--paper-progress-transition-timing-function` | The timing function for the transition | `ease`
  `--paper-progress-transition-delay` | delay for the transition | `0s`
  `--paper-progress-container-color` | Color of the container | `--google-grey-300`
  `--paper-progress-active-color` | The color of the active bar | `--google-green-500`
  `--paper-progress-secondary-color` | The color of the secondary bar | `--google-green-100`
  `--paper-progress-disabled-active-color` | The color of the active bar if disabled | `--google-grey-500`
  `--paper-progress-disabled-secondary-color` | The color of the secondary bar if disabled  | `--google-grey-300`
  `--paper-progress-height` | The height of the progress bar | `4px`
  `--paper-progress-indeterminate-cycle-duration` | Duration of an indeterminate cycle | `2s`

  @group Paper Elements
  @element paper-progress
  @demo demo/index.html
  */Polymer({_template:html(_templateObject19_593e7270f77111e88ec25b7f4da4f001()),is:'paper-progress',behaviors:[IronRangeBehavior],properties:{/**
       * The number that represents the current secondary progress.
       */secondaryProgress:{type:Number,value:0},/**
       * The secondary ratio
       */secondaryRatio:{type:Number,value:0,readOnly:true},/**
       * Use an indeterminate progress indicator.
       */indeterminate:{type:Boolean,value:false,observer:'_toggleIndeterminate'},/**
       * True if the progress is disabled.
       */disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:'_disabledChanged'}},observers:['_progressChanged(secondaryProgress, value, min, max, indeterminate)'],hostAttributes:{role:'progressbar'},_toggleIndeterminate:function _toggleIndeterminate(indeterminate){// If we use attribute/class binding, the animation sometimes doesn't
// translate properly on Safari 7.1. So instead, we toggle the class here in
// the update method.
this.toggleClass('indeterminate',indeterminate,this.$.primaryProgress);},_transformProgress:function _transformProgress(progress,ratio){var transform='scaleX('+ratio/100+')';progress.style.transform=progress.style.webkitTransform=transform;},_mainRatioChanged:function _mainRatioChanged(ratio){this._transformProgress(this.$.primaryProgress,ratio);},_progressChanged:function _progressChanged(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=this._calcRatio(secondaryProgress)*100;var mainRatio=this._calcRatio(value)*100;this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute('aria-valuenow');}else{this.setAttribute('aria-valuenow',value);}this.setAttribute('aria-valuemin',min);this.setAttribute('aria-valuemax',max);},_disabledChanged:function _disabledChanged(disabled){this.setAttribute('aria-disabled',disabled?'true':'false');},_hideSecondaryProgress:function _hideSecondaryProgress(secondaryRatio){return secondaryRatio===0;}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
   * focus.
   *
   * @polymerBehavior PaperInkyFocusBehavior
   */var PaperInkyFocusBehaviorImpl={observers:['_focusedChanged(receivedFocusFromKeyboard)'],_focusedChanged:function _focusedChanged(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple();}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard;}},_createRipple:function _createRipple(){var ripple=PaperRippleBehavior._createRipple();ripple.id='ink';ripple.setAttribute('center','');ripple.classList.add('circle');return ripple;}};/** @polymerBehavior */var PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var template$9=html(_templateObject20_593e7270f77111e88ec25b7f4da4f001());template$9.setAttribute('strip-whitespace','');/**
  Material design:
  [Sliders](https://www.google.com/design/spec/components/sliders.html)

  `paper-slider` allows user to select a value from a range of values by
  moving the slider thumb.  The interactive nature of the slider makes it a
  great choice for settings that reflect intensity levels, such as volume,
  brightness, or color saturation.

  Example:

      <paper-slider></paper-slider>

  Use `min` and `max` to specify the slider range.  Default is 0 to 100.

  Example:

      <paper-slider min="10" max="200" value="110"></paper-slider>

  ### Styling

  The following custom properties and mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-slider-container-color` | The background color of the bar | `--paper-grey-400`
  `--paper-slider-bar-color` | The background color of the slider | `transparent`
  `--paper-slider-active-color` | The progress bar color | `--google-blue-700`
  `--paper-slider-secondary-color` | The secondary progress bar color | `--google-blue-300`
  `--paper-slider-knob-color` | The knob color | `--google-blue-700`
  `--paper-slider-disabled-knob-color` | The disabled knob color | `--paper-grey-400`
  `--paper-slider-pin-color` | The pin color | `--google-blue-700`
  `--paper-slider-font-color` | The pin's text color | `#fff`
  `--paper-slider-markers-color` | The snaps markers color | `#000`
  `--paper-slider-disabled-active-color` | The disabled progress bar color | `--paper-grey-400`
  `--paper-slider-disabled-secondary-color` | The disabled secondary progress bar color | `--paper-grey-400`
  `--paper-slider-knob-start-color` | The fill color of the knob at the far left | `transparent`
  `--paper-slider-knob-start-border-color` | The border color of the knob at the far left | `--paper-grey-400`
  `--paper-slider-pin-start-color` | The color of the pin at the far left | `--paper-grey-400`
  `--paper-slider-height` | Height of the progress bar | `2px`
  `--paper-slider-input` | Mixin applied to the input in editable mode | `{}`
  `--paper-slider-input-container-input` | Mixin applied to the paper-input-container-input in editable mode | `{}`

  @group Paper Elements
  @element paper-slider
  @demo demo/index.html
  */Polymer({_template:template$9,is:'paper-slider',behaviors:[IronA11yKeysBehavior,IronFormElementBehavior,PaperInkyFocusBehavior,IronRangeBehavior],properties:{value:{type:Number,value:0},/**
       * If true, the slider thumb snaps to tick marks evenly spaced based
       * on the `step` property value.
       */snaps:{type:Boolean,value:false,notify:true},/**
       * If true, a pin with numeric value label is shown when the slider thumb
       * is pressed. Use for settings for which users need to know the exact
       * value of the setting.
       */pin:{type:Boolean,value:false,notify:true},/**
       * The number that represents the current secondary progress.
       */secondaryProgress:{type:Number,value:0,notify:true,observer:'_secondaryProgressChanged'},/**
       * If true, an input is shown and user can use it to set the slider value.
       */editable:{type:Boolean,value:false},/**
       * The immediate value of the slider.  This value is updated while the user
       * is dragging the slider.
       */immediateValue:{type:Number,value:0,readOnly:true,notify:true},/**
       * The maximum number of markers
       */maxMarkers:{type:Number,value:0,notify:true},/**
       * If true, the knob is expanded
       */expand:{type:Boolean,value:false,readOnly:true},/**
       * If true, a touchmove on the slider bar doesn't drag the slider thunb.
       * Tapping on the slider bar still updates the slider's position
       */ignoreBarTouch:{type:Boolean,value:false},/**
       * True when the user is dragging the slider.
       */dragging:{type:Boolean,value:false,readOnly:true,notify:true},transiting:{type:Boolean,value:false,readOnly:true},markers:{type:Array,readOnly:true,value:function value(){return[];}}},observers:['_updateKnob(value, min, max, snaps, step)','_valueChanged(value)','_immediateValueChanged(immediateValue)','_updateMarkers(maxMarkers, min, max, snaps)'],hostAttributes:{role:'slider',tabindex:0},/** @type {!Object} */keyBindings:{'left':'_leftKey','right':'_rightKey','down pagedown home':'_decrementKey','up pageup end':'_incrementKey'},ready:function ready(){if(this.ignoreBarTouch){setTouchAction(this.$.sliderBar,'auto');}},/**
     * Increases value by `step` but not above `max`.
     * @method increment
     */increment:function increment(){this.value=this._clampValue(this.value+this.step);},/**
     * Decreases value by `step` but not below `min`.
     * @method decrement
     */decrement:function decrement(){this.value=this._clampValue(this.value-this.step);},_updateKnob:function _updateKnob(value,min,max,snaps,step){this.setAttribute('aria-valuemin',min);this.setAttribute('aria-valuemax',max);this.setAttribute('aria-valuenow',value);this._positionKnob(this._calcRatio(value)*100);},_valueChanged:function _valueChanged(){this.fire('value-change',{composed:true});},_immediateValueChanged:function _immediateValueChanged(){if(this.dragging){this.fire('immediate-value-change',{composed:true});}else{this.value=this.immediateValue;}},_secondaryProgressChanged:function _secondaryProgressChanged(){this.secondaryProgress=this._clampValue(this.secondaryProgress);},_expandKnob:function _expandKnob(){this._setExpand(true);},_resetKnob:function _resetKnob(){this.cancelDebouncer('expandKnob');this._setExpand(false);},_positionKnob:function _positionKnob(ratio){this._setImmediateValue(this._calcStep(this._calcKnobPosition(ratio)));this._setRatio(this._calcRatio(this.immediateValue)*100);this.$.sliderKnob.style.left=this.ratio+'%';if(this.dragging){this._knobstartx=this.ratio*this._w/100;this.translate3d(0,0,0,this.$.sliderKnob);}},_calcKnobPosition:function _calcKnobPosition(ratio){return(this.max-this.min)*ratio/100+this.min;},_onTrack:function _onTrack(event){event.stopPropagation();switch(event.detail.state){case'start':this._trackStart(event);break;case'track':this._trackX(event);break;case'end':this._trackEnd();break;}},_trackStart:function _trackStart(event){this._setTransiting(false);this._w=this.$.sliderBar.offsetWidth;this._x=this.ratio*this._w/100;this._startx=this._x;this._knobstartx=this._startx;this._minx=-this._startx;this._maxx=this._w-this._startx;this.$.sliderKnob.classList.add('dragging');this._setDragging(true);},_trackX:function _trackX(event){if(!this.dragging){this._trackStart(event);}var direction=this._isRTL?-1:1;var dx=Math.min(this._maxx,Math.max(this._minx,event.detail.dx*direction));this._x=this._startx+dx;var immediateValue=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(immediateValue);// update knob's position
var translateX=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(translateX+'px',0,0,this.$.sliderKnob);},_trackEnd:function _trackEnd(){var s=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove('dragging');this._setDragging(false);this._resetKnob();this.value=this.immediateValue;s.transform=s.webkitTransform='';this.fire('change',{composed:true});},_knobdown:function _knobdown(event){this._expandKnob();// cancel selection
event.preventDefault();// set the focus manually because we will called prevent default
this.focus();},_bartrack:function _bartrack(event){if(this._allowBarEvent(event)){this._onTrack(event);}},_barclick:function _barclick(event){this._w=this.$.sliderBar.offsetWidth;var rect=this.$.sliderBar.getBoundingClientRect();var ratio=(event.detail.x-rect.left)/this._w*100;if(this._isRTL){ratio=100-ratio;}var prevRatio=this.ratio;this._setTransiting(true);this._positionKnob(ratio);// if the ratio doesn't change, sliderKnob's animation won't start
// and `_knobTransitionEnd` won't be called
// Therefore, we need to manually update the `transiting` state
if(prevRatio===this.ratio){this._setTransiting(false);}this.async(function(){this.fire('change',{composed:true});});// cancel selection
event.preventDefault();// set the focus manually because we will called prevent default
this.focus();},_bardown:function _bardown(event){if(this._allowBarEvent(event)){this.debounce('expandKnob',this._expandKnob,60);this._barclick(event);}},_knobTransitionEnd:function _knobTransitionEnd(event){if(event.target===this.$.sliderKnob){this._setTransiting(false);}},_updateMarkers:function _updateMarkers(maxMarkers,min,max,snaps){if(!snaps){this._setMarkers([]);}var steps=Math.round((max-min)/this.step);if(steps>maxMarkers){steps=maxMarkers;}if(steps<0||!isFinite(steps)){steps=0;}this._setMarkers(new Array(steps));},_mergeClasses:function _mergeClasses(classes){return Object.keys(classes).filter(function(className){return classes[className];}).join(' ');},_getClassNames:function _getClassNames(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable});},_allowBarEvent:function _allowBarEvent(event){return!this.ignoreBarTouch||_instanceof(event.detail.sourceEvent,MouseEvent);},get _isRTL(){if(this.__isRTL===undefined){this.__isRTL=window.getComputedStyle(this)['direction']==='rtl';}return this.__isRTL;},_leftKey:function _leftKey(event){if(this._isRTL)this._incrementKey(event);else this._decrementKey(event);},_rightKey:function _rightKey(event){if(this._isRTL)this._decrementKey(event);else this._incrementKey(event);},_incrementKey:function _incrementKey(event){if(!this.disabled){if(event.detail.key==='end'){this.value=this.max;}else{this.increment();}this.fire('change');event.preventDefault();}},_decrementKey:function _decrementKey(event){if(!this.disabled){if(event.detail.key==='home'){this.value=this.min;}else{this.decrement();}this.fire('change');event.preventDefault();}},_changeValue:function _changeValue(event){this.value=event.target.value;this.fire('change',{composed:true});},_inputKeyDown:function _inputKeyDown(event){event.stopPropagation();},// create the element ripple inside the `sliderKnob`
_createRipple:function _createRipple(){this._rippleContainer=this.$.sliderKnob;return PaperInkyFocusBehaviorImpl._createRipple.call(this);},// Hide the ripple when user is not interacting with keyboard.
// This behavior is different from other ripple-y controls, but is
// according to spec:
// https://www.google.com/design/spec/components/sliders.html
_focusedChanged:function _focusedChanged(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple();}if(this.hasRipple()){// note, ripple must be un-hidden prior to setting `holdDown`
if(receivedFocusFromKeyboard){this._ripple.style.display='';}else{this._ripple.style.display='none';}this._ripple.holdDown=receivedFocusFromKeyboard;}}/**
     * Fired when the slider's value changes.
     *
     * @event value-change
     */ /**
     * Fired when the slider's immediateValue changes. Only occurs while the
     * user is dragging.
     *
     * To detect changes to immediateValue that happen for any input (i.e.
     * dragging, tapping, clicking, etc.) listen for immediate-value-changed
     * instead.
     *
     * @event immediate-value-change
     */ /**
     * Fired when the slider's value changes due to user interaction.
     *
     * Changes to the slider's value due to changes in an underlying
     * bound variable will not trigger this event.
     *
     * @event change
     */});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Use `IronCheckedElementBehavior` to implement a custom element that has a
   * `checked` property, which can be used for validation if the element is also
   * `required`. Element instances implementing this behavior will also be
   * registered for use in an `iron-form` element.
   *
   * @demo demo/index.html
   * @polymerBehavior IronCheckedElementBehavior
   */var IronCheckedElementBehaviorImpl={properties:{/**
       * Fired when the checked state changes.
       *
       * @event iron-change
       */ /**
       * Gets or sets the state, `true` is checked and `false` is unchecked.
       */checked:{type:Boolean,value:false,reflectToAttribute:true,notify:true,observer:'_checkedChanged'},/**
       * If true, the button toggles the active state with each tap or press
       * of the spacebar.
       */toggles:{type:Boolean,value:true,reflectToAttribute:true},/* Overriden from IronFormElementBehavior */value:{type:String,value:'on',observer:'_valueChanged'}},observers:['_requiredChanged(required)'],created:function created(){// Used by `iron-form` to handle the case that an element with this behavior
// doesn't have a role of 'checkbox' or 'radio', but should still only be
// included when the form is serialized if `this.checked === true`.
this._hasIronCheckedElementBehavior=true;},/**
     * Returns false if the element is required and not checked, and true
     * otherwise.
     * @param {*=} _value Ignored.
     * @return {boolean} true if `required` is false or if `checked` is true.
     */_getValidity:function _getValidity(_value){return this.disabled||!this.required||this.checked;},/**
     * Update the aria-required label when `required` is changed.
     */_requiredChanged:function _requiredChanged(){if(this.required){this.setAttribute('aria-required','true');}else{this.removeAttribute('aria-required');}},/**
     * Fire `iron-changed` when the checked state changes.
     */_checkedChanged:function _checkedChanged(){this.active=this.checked;this.fire('iron-change');},/**
     * Reset value to 'on' if it is set to `undefined`.
     */_valueChanged:function _valueChanged(){if(this.value===undefined||this.value===null){this.value='on';}}};/** @polymerBehavior */var IronCheckedElementBehavior=[IronFormElementBehavior,IronValidatableBehavior,IronCheckedElementBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * Use `PaperCheckedElementBehavior` to implement a custom element that has a
   * `checked` property similar to `IronCheckedElementBehavior` and is compatible
   * with having a ripple effect.
   * @polymerBehavior PaperCheckedElementBehavior
   */var PaperCheckedElementBehaviorImpl={/**
     * Synchronizes the element's checked state with its ripple effect.
     */_checkedChanged:function _checkedChanged(){IronCheckedElementBehaviorImpl._checkedChanged.call(this);if(this.hasRipple()){if(this.checked){this._ripple.setAttribute('checked','');}else{this._ripple.removeAttribute('checked');}}},/**
     * Synchronizes the element's `active` and `checked` state.
     */_buttonStateChanged:function _buttonStateChanged(){PaperRippleBehavior._buttonStateChanged.call(this);if(this.disabled){return;}if(this.isAttached){this.checked=this.active;}}};/** @polymerBehavior */var PaperCheckedElementBehavior=[PaperInkyFocusBehavior,IronCheckedElementBehavior,PaperCheckedElementBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */var template$a=html(_templateObject21_593e7270f77111e88ec25b7f4da4f001());template$a.setAttribute('strip-whitespace','');/**
  Material design: [Radio button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

  `paper-radio-button` is a button that can be either checked or unchecked. The
  user can tap the radio button to check or uncheck it.

  Use a `<paper-radio-group>` to group a set of radio buttons. When radio buttons
  are inside a radio group, exactly one radio button in the group can be checked
  at any time.

  Example:

      <paper-radio-button></paper-radio-button>
      <paper-radio-button>Item label</paper-radio-button>

  ### Styling

  The following custom properties and mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-radio-button-unchecked-background-color` | Radio button background color when the input is not checked | `transparent`
  `--paper-radio-button-unchecked-color` | Radio button color when the input is not checked | `--primary-text-color`
  `--paper-radio-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
  `--paper-radio-button-checked-color` | Radio button color when the input is checked | `--primary-color`
  `--paper-radio-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
  `--paper-radio-button-size` | Size of the radio button | `16px`
  `--paper-radio-button-ink-size` | Size of the ripple | `48px`
  `--paper-radio-button-label-color` | Label color | `--primary-text-color`
  `--paper-radio-button-label-spacing` | Spacing between the label and the button | `10px`
  `--paper-radio-button-radio-container` | A mixin applied to the internal radio container | `{}`
  `--paper-radio-button-label` | A mixin applied to the internal label | `{}`
  `--paper-radio-button-label-checked` | A mixin applied to the internal label when the radio button is checked | `{}`

  This element applies the mixin `--paper-font-common-base` but does not import
  `paper-styles/typography.html`. In order to apply the `Roboto` font to this
  element, make sure you've imported `paper-styles/typography.html`.

  @group Paper Elements
  @element paper-radio-button
  @demo demo/index.html
  */Polymer({_template:template$a,is:'paper-radio-button',behaviors:[PaperCheckedElementBehavior],hostAttributes:{role:'radio','aria-checked':false,tabindex:0},properties:{/**
       * Fired when the checked state changes due to user interaction.
       *
       * @event change
       */ /**
       * Fired when the checked state changes.
       *
       * @event iron-change
       */ariaActiveAttribute:{type:String,value:'aria-checked'}},ready:function ready(){this._rippleContainer=this.$.radioContainer;},attached:function attached(){// Wait until styles have resolved to check for the default sentinel.
// See polymer#4009 for more details.
afterNextRender(this,function(){var inkSize=this.getComputedStyleValue('--calculated-paper-radio-button-ink-size').trim();// If unset, compute and set the default `--paper-radio-button-ink-size`.
if(inkSize==='-1px'){var size=parseFloat(this.getComputedStyleValue('--calculated-paper-radio-button-size').trim());var defaultInkSize=Math.floor(3*size);// The button and ripple need to have the same parity so that their
// centers align.
if(defaultInkSize%2!==size%2){defaultInkSize++;}this.updateStyles({'--paper-radio-button-ink-size':defaultInkSize+'px'});}});}});/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var IronSelection=/*#__PURE__*/function(){/**
     * @param {!Function} selectCallback
     * @suppress {missingProvide}
     */function IronSelection(selectCallback){_classCallCheck(this,IronSelection);this.selection=[];this.selectCallback=selectCallback;}/**
     * Retrieves the selected item(s).
     *
     * @returns Returns the selected item(s). If the multi property is true,
     * `get` will return an array, otherwise it will return
     * the selected item or undefined if there is no selection.
     */_createClass(IronSelection,[{key:"get",value:function get(){return this.multi?this.selection.slice():this.selection[0];}/**
     * Clears all the selection except the ones indicated.
     *
     * @param {Array} excludes items to be excluded.
     */},{key:"clear",value:function clear(excludes){this.selection.slice().forEach(function(item){if(!excludes||excludes.indexOf(item)<0){this.setItemSelected(item,false);}},this);}/**
     * Indicates if a given item is selected.
     *
     * @param {*} item The item whose selection state should be checked.
     * @return {boolean} Returns true if `item` is selected.
     */},{key:"isSelected",value:function isSelected(item){return this.selection.indexOf(item)>=0;}/**
     * Sets the selection state for a given item to either selected or deselected.
     *
     * @param {*} item The item to select.
     * @param {boolean} isSelected True for selected, false for deselected.
     */},{key:"setItemSelected",value:function setItemSelected(item,isSelected){if(item!=null){if(isSelected!==this.isSelected(item)){// proceed to update selection only if requested state differs from
// current
if(isSelected){this.selection.push(item);}else{var i=this.selection.indexOf(item);if(i>=0){this.selection.splice(i,1);}}if(this.selectCallback){this.selectCallback(item,isSelected);}}}}/**
     * Sets the selection state for a given item. If the `multi` property
     * is true, then the selected state of `item` will be toggled; otherwise
     * the `item` will be selected.
     *
     * @param {*} item The item to select.
     */},{key:"select",value:function select(item){if(this.multi){this.toggle(item);}else if(this.get()!==item){this.setItemSelected(this.get(),false);this.setItemSelected(item,true);}}/**
     * Toggles the selection state for `item`.
     *
     * @param {*} item The item to toggle.
     */},{key:"toggle",value:function toggle(item){this.setItemSelected(item,!this.isSelected(item));}}]);return IronSelection;}();/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @polymerBehavior
   */var IronSelectableBehavior={/**
     * Fired when iron-selector is activated (selected or deselected).
     * It is fired before the selected items are changed.
     * Cancel the event to abort selection.
     *
     * @event iron-activate
     */ /**
     * Fired when an item is selected
     *
     * @event iron-select
     */ /**
     * Fired when an item is deselected
     *
     * @event iron-deselect
     */ /**
     * Fired when the list of selectable items changes (e.g., items are
     * added or removed). The detail of the event is a mutation record that
     * describes what changed.
     *
     * @event iron-items-changed
     */properties:{/**
       * If you want to use an attribute value or property of an element for
       * `selected` instead of the index, set this to the name of the attribute
       * or property. Hyphenated values are converted to camel case when used to
       * look up the property of a selectable element. Camel cased values are
       * *not* converted to hyphenated values for attribute lookup. It's
       * recommended that you provide the hyphenated form of the name so that
       * selection works in both cases. (Use `attr-or-property-name` instead of
       * `attrOrPropertyName`.)
       */attrForSelected:{type:String,value:null},/**
       * Gets or sets the selected element. The default is to use the index of the
       * item.
       * @type {string|number}
       */selected:{type:String,notify:true},/**
       * Returns the currently selected item.
       *
       * @type {?Object}
       */selectedItem:{type:Object,readOnly:true,notify:true},/**
       * The event that fires from items when they are selected. Selectable
       * will listen for this event from items and update the selection state.
       * Set to empty string to listen to no events.
       */activateEvent:{type:String,value:'tap',observer:'_activateEventChanged'},/**
       * This is a CSS selector string.  If this is set, only items that match the
       * CSS selector are selectable.
       */selectable:String,/**
       * The class to set on elements when selected.
       */selectedClass:{type:String,value:'iron-selected'},/**
       * The attribute to set on elements when selected.
       */selectedAttribute:{type:String,value:null},/**
       * Default fallback if the selection based on selected with
       * `attrForSelected` is not found.
       */fallbackSelection:{type:String,value:null},/**
       * The list of items from which a selection can be made.
       */items:{type:Array,readOnly:true,notify:true,value:function value(){return[];}},/**
       * The set of excluded elements where the key is the `localName`
       * of the element that will be ignored from the item list.
       *
       * @default {template: 1}
       */_excludedLocalNames:{type:Object,value:function value(){return{'template':1,'dom-bind':1,'dom-if':1,'dom-repeat':1};}}},observers:['_updateAttrForSelected(attrForSelected)','_updateSelected(selected)','_checkFallback(fallbackSelection)'],created:function created(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this));},attached:function attached(){this._observer=this._observeItems(this);this._addListener(this.activateEvent);},detached:function detached(){if(this._observer){dom(this).unobserveNodes(this._observer);}this._removeListener(this.activateEvent);},/**
     * Returns the index of the given item.
     *
     * @method indexOf
     * @param {Object} item
     * @returns Returns the index of the item
     */indexOf:function indexOf(item){return this.items?this.items.indexOf(item):-1;},/**
     * Selects the given value.
     *
     * @method select
     * @param {string|number} value the value to select.
     */select:function select(value){this.selected=value;},/**
     * Selects the previous item.
     *
     * @method selectPrevious
     */selectPrevious:function selectPrevious(){var length=this.items.length;var index=length-1;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))-1+length)%length;}this.selected=this._indexToValue(index);},/**
     * Selects the next item.
     *
     * @method selectNext
     */selectNext:function selectNext(){var index=0;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))+1)%this.items.length;}this.selected=this._indexToValue(index);},/**
     * Selects the item at the given index.
     *
     * @method selectIndex
     */selectIndex:function selectIndex(index){this.select(this._indexToValue(index));},/**
     * Force a synchronous update of the `items` property.
     *
     * NOTE: Consider listening for the `iron-items-changed` event to respond to
     * updates to the set of selectable items after updates to the DOM list and
     * selection state have been made.
     *
     * WARNING: If you are using this method, you should probably consider an
     * alternate approach. Synchronously querying for items is potentially
     * slow for many use cases. The `items` property will update asynchronously
     * on its own to reflect selectable items in the DOM.
     */forceSynchronousItemUpdate:function forceSynchronousItemUpdate(){if(this._observer&&typeof this._observer.flush==='function'){// NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
// `observeNodes` callbacks. Polymer 2.x returns an object from
// `observeNodes` with a `flush` that synchronously gives the callback any
// pending MutationRecords (retrieved with `takeRecords`). Any case where
// ShadyDOM flushes were expected to synchronously trigger item updates
// will now require calling `forceSynchronousItemUpdate`.
this._observer.flush();}else{this._updateItems();}},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return this.selected!=null;},_checkFallback:function _checkFallback(){this._updateSelected();},_addListener:function _addListener(eventName){this.listen(this,eventName,'_activateHandler');},_removeListener:function _removeListener(eventName){this.unlisten(this,eventName,'_activateHandler');},_activateEventChanged:function _activateEventChanged(eventName,old){this._removeListener(old);this._addListener(eventName);},_updateItems:function _updateItems(){var nodes=dom(this).queryDistributedElements(this.selectable||'*');nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes);},_updateAttrForSelected:function _updateAttrForSelected(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem);}},_updateSelected:function _updateSelected(){this._selectSelected(this.selected);},_selectSelected:function _selectSelected(selected){if(!this.items){return;}var item=this._valueToItem(this.selected);if(item){this._selection.select(item);}else{this._selection.clear();}// Check for items, since this array is populated only when attached
// Since Number(0) is falsy, explicitly check for undefined
if(this.fallbackSelection&&this.items.length&&this._selection.get()===undefined){this.selected=this.fallbackSelection;}},_filterItem:function _filterItem(node){return!this._excludedLocalNames[node.localName];},_valueToItem:function _valueToItem(value){return value==null?null:this.items[this._valueToIndex(value)];},_valueToIndex:function _valueToIndex(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i;}}}else{return Number(value);}},_indexToValue:function _indexToValue(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item);}}else{return index;}},_valueForItem:function _valueForItem(item){if(!item){return null;}if(!this.attrForSelected){var i=this.indexOf(item);return i===-1?null:i;}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=undefined?propValue:item.getAttribute(this.attrForSelected);},_applySelection:function _applySelection(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item);}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item);}this._selectionChange();this.fire('iron-'+(isSelected?'select':'deselect'),{item:item});},_selectionChange:function _selectionChange(){this._setSelectedItem(this._selection.get());},// observe items change under the given node.
_observeItems:function _observeItems(node){return dom(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();// Let other interested parties know about the change so that
// we don't have to recreate mutation observers everywhere.
this.fire('iron-items-changed',mutation,{bubbles:false,cancelable:false});});},_activateHandler:function _activateHandler(e){var t=e.target;var items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(i>=0){var value=this._indexToValue(i);this._itemActivate(value,t);return;}t=t.parentNode;}},_itemActivate:function _itemActivate(value,item){if(!this.fire('iron-activate',{selected:value,item:item},{cancelable:true}).defaultPrevented){this.select(value);}}};/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * @polymerBehavior IronMultiSelectableBehavior
   */var IronMultiSelectableBehaviorImpl={properties:{/**
       * If true, multiple selections are allowed.
       */multi:{type:Boolean,value:false,observer:'multiChanged'},/**
       * Gets or sets the selected elements. This is used instead of `selected`
       * when `multi` is true.
       */selectedValues:{type:Array,notify:true,value:function value(){return[];}},/**
       * Returns an array of currently selected items.
       */selectedItems:{type:Array,readOnly:true,notify:true,value:function value(){return[];}}},observers:['_updateSelected(selectedValues.splices)'],/**
     * Selects the given value. If the `multi` property is true, then the selected
     * state of the `value` will be toggled; otherwise the `value` will be
     * selected.
     *
     * @method select
     * @param {string|number} value the value to select.
     */select:function select(value){if(this.multi){this._toggleSelected(value);}else{this.selected=value;}},multiChanged:function multiChanged(multi){this._selection.multi=multi;this._updateSelected();},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return this.selected!=null||this.selectedValues!=null&&this.selectedValues.length;},_updateAttrForSelected:function _updateAttrForSelected(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this);}else if(this.selectedItems&&this.selectedItems.length>0){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem));},this).filter(function(unfilteredValue){return unfilteredValue!=null;},this);}},_updateSelected:function _updateSelected(){if(this.multi){this._selectMulti(this.selectedValues);}else{this._selectSelected(this.selected);}},_selectMulti:function _selectMulti(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return item!==null&&item!==undefined;});// clear all but the current selected items
this._selection.clear(selectedItems);// select only those not selected yet
for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],true);}// Check for items, since this array is populated only when attached
if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection);}}},_selectionChange:function _selectionChange(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null);}else{if(s!==null&&s!==undefined){this._setSelectedItems([s]);this._setSelectedItem(s);}else{this._setSelectedItems([]);this._setSelectedItem(null);}}},_toggleSelected:function _toggleSelected(value){var i=this.selectedValues.indexOf(value);var unselected=i<0;if(unselected){this.push('selectedValues',value);}else{this.splice('selectedValues',i,1);}},_valuesToItems:function _valuesToItems(values){return values==null?null:values.map(function(value){return this._valueToItem(value);},this);}};/** @polymerBehavior */var IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * `IronMenuBehavior` implements accessible menu behavior.
   *
   * @demo demo/index.html
   * @polymerBehavior IronMenuBehavior
   */var IronMenuBehaviorImpl={properties:{/**
       * Returns the currently focused item.
       * @type {?Object}
       */focusedItem:{observer:'_focusedItemChanged',readOnly:true,type:Object},/**
       * The attribute to use on menu items to look up the item title. Typing the
       * first letter of an item when the menu is open focuses that item. If
       * unset, `textContent` will be used.
       */attrForItemTitle:{type:String},/**
       * @type {boolean}
       */disabled:{type:Boolean,value:false,observer:'_disabledChanged'}},/**
     * The list of keys has been taken from
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
     * @private
     */_MODIFIER_KEYS:['Alt','AltGraph','CapsLock','Control','Fn','FnLock','Hyper','Meta','NumLock','OS','ScrollLock','Shift','Super','Symbol','SymbolLock'],/** @private */_SEARCH_RESET_TIMEOUT_MS:1000,/** @private */_previousTabIndex:0,hostAttributes:{'role':'menu'},observers:['_updateMultiselectable(multi)'],listeners:{'focus':'_onFocus','keydown':'_onKeydown','iron-items-changed':'_onIronItemsChanged'},/**
     * @type {!Object}
     */keyBindings:{'up':'_onUpKey','down':'_onDownKey','esc':'_onEscKey','shift+tab:keydown':'_onShiftTabDown'},attached:function attached(){this._resetTabindices();},/**
     * Selects the given value. If the `multi` property is true, then the selected
     * state of the `value` will be toggled; otherwise the `value` will be
     * selected.
     *
     * @param {string|number} value the value to select.
     */select:function select(value){// Cancel automatically focusing a default item if the menu received focus
// through a user action selecting a particular item.
if(this._defaultFocusAsync){this.cancelAsync(this._defaultFocusAsync);this._defaultFocusAsync=null;}var item=this._valueToItem(value);if(item&&item.hasAttribute('disabled'))return;this._setFocusedItem(item);IronMultiSelectableBehaviorImpl.select.apply(this,arguments);},/**
     * Resets all tabindex attributes to the appropriate value based on the
     * current selection state. The appropriate value is `0` (focusable) for
     * the default selected item, and `-1` (not keyboard focusable) for all
     * other items.
     */_resetTabindices:function _resetTabindices(){var selectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(item){item.setAttribute('tabindex',item===selectedItem?'0':'-1');},this);},/**
     * Sets appropriate ARIA based on whether or not the menu is meant to be
     * multi-selectable.
     *
     * @param {boolean} multi True if the menu should be multi-selectable.
     */_updateMultiselectable:function _updateMultiselectable(multi){if(multi){this.setAttribute('aria-multiselectable','true');}else{this.removeAttribute('aria-multiselectable');}},/**
     * Given a KeyboardEvent, this method will focus the appropriate item in the
     * menu (if there is a relevant item, and it is possible to focus it).
     *
     * @param {KeyboardEvent} event A KeyboardEvent.
     */_focusWithKeyboardEvent:function _focusWithKeyboardEvent(event){// Make sure that the key pressed is not a modifier key.
// getModifierState is not being used, as it is not available in Safari
// earlier than 10.0.2 (https://trac.webkit.org/changeset/206725/webkit)
if(this._MODIFIER_KEYS.indexOf(event.key)!==-1)return;this.cancelDebouncer('_clearSearchText');var searchText=this._searchText||'';var key=event.key&&event.key.length==1?event.key:String.fromCharCode(event.keyCode);searchText+=key.toLocaleLowerCase();var searchLength=searchText.length;for(var i=0,item;item=this.items[i];i++){if(item.hasAttribute('disabled')){continue;}var attr=this.attrForItemTitle||'textContent';var title=(item[attr]||item.getAttribute(attr)||'').trim();if(title.length<searchLength){continue;}if(title.slice(0,searchLength).toLocaleLowerCase()==searchText){this._setFocusedItem(item);break;}}this._searchText=searchText;this.debounce('_clearSearchText',this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS);},_clearSearchText:function _clearSearchText(){this._searchText='';},/**
     * Focuses the previous item (relative to the currently focused item) in the
     * menu, disabled items will be skipped.
     * Loop until length + 1 to handle case of single item in menu.
     */_focusPrevious:function _focusPrevious(){var length=this.items.length;var curFocusIndex=Number(this.indexOf(this.focusedItem));for(var i=1;i<length+1;i++){var item=this.items[(curFocusIndex-i+length)%length];if(!item.hasAttribute('disabled')){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);// Focus might not have worked, if the element was hidden or not
// focusable. In that case, try again.
if(dom(owner).activeElement==item){return;}}}},/**
     * Focuses the next item (relative to the currently focused item) in the
     * menu, disabled items will be skipped.
     * Loop until length + 1 to handle case of single item in menu.
     */_focusNext:function _focusNext(){var length=this.items.length;var curFocusIndex=Number(this.indexOf(this.focusedItem));for(var i=1;i<length+1;i++){var item=this.items[(curFocusIndex+i)%length];if(!item.hasAttribute('disabled')){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);// Focus might not have worked, if the element was hidden or not
// focusable. In that case, try again.
if(dom(owner).activeElement==item){return;}}}},/**
     * Mutates items in the menu based on provided selection details, so that
     * all items correctly reflect selection state.
     *
     * @param {Element} item An item in the menu.
     * @param {boolean} isSelected True if the item should be shown in a
     * selected state, otherwise false.
     */_applySelection:function _applySelection(item,isSelected){if(isSelected){item.setAttribute('aria-selected','true');}else{item.removeAttribute('aria-selected');}IronSelectableBehavior._applySelection.apply(this,arguments);},/**
     * Discretely updates tabindex values among menu items as the focused item
     * changes.
     *
     * @param {Element} focusedItem The element that is currently focused.
     * @param {?Element} old The last element that was considered focused, if
     * applicable.
     */_focusedItemChanged:function _focusedItemChanged(focusedItem,old){old&&old.setAttribute('tabindex','-1');if(focusedItem&&!focusedItem.hasAttribute('disabled')&&!this.disabled){focusedItem.setAttribute('tabindex','0');focusedItem.focus();}},/**
     * A handler that responds to mutation changes related to the list of items
     * in the menu.
     *
     * @param {CustomEvent} event An event containing mutation records as its
     * detail.
     */_onIronItemsChanged:function _onIronItemsChanged(event){if(event.detail.addedNodes.length){this._resetTabindices();}},/**
     * Handler that is called when a shift+tab keypress is detected by the menu.
     *
     * @param {CustomEvent} event A key combination event.
     */_onShiftTabDown:function _onShiftTabDown(event){var oldTabIndex=this.getAttribute('tabindex');IronMenuBehaviorImpl._shiftTabPressed=true;this._setFocusedItem(null);this.setAttribute('tabindex','-1');this.async(function(){this.setAttribute('tabindex',oldTabIndex);IronMenuBehaviorImpl._shiftTabPressed=false;// NOTE(cdata): polymer/polymer#1305
},1);},/**
     * Handler that is called when the menu receives focus.
     *
     * @param {FocusEvent} event A focus event.
     */_onFocus:function _onFocus(event){if(IronMenuBehaviorImpl._shiftTabPressed){// do not focus the menu itself
return;}// Do not focus the selected tab if the deepest target is part of the
// menu element's local DOM and is focusable.
var rootTarget=/** @type {?HTMLElement} */dom(event).rootTarget;if(rootTarget!==this&&typeof rootTarget.tabIndex!=='undefined'&&!this.isLightDescendant(rootTarget)){return;}// clear the cached focus item
this._defaultFocusAsync=this.async(function(){// focus the selected item when the menu receives focus, or the first item
// if no item is selected
var selectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null);if(selectedItem){this._setFocusedItem(selectedItem);}else if(this.items[0]){// We find the first none-disabled item (if one exists)
this._focusNext();}});},/**
     * Handler that is called when the up key is pressed.
     *
     * @param {CustomEvent} event A key combination event.
     */_onUpKey:function _onUpKey(event){// up and down arrows moves the focus
this._focusPrevious();event.detail.keyboardEvent.preventDefault();},/**
     * Handler that is called when the down key is pressed.
     *
     * @param {CustomEvent} event A key combination event.
     */_onDownKey:function _onDownKey(event){this._focusNext();event.detail.keyboardEvent.preventDefault();},/**
     * Handler that is called when the esc key is pressed.
     *
     * @param {CustomEvent} event A key combination event.
     */_onEscKey:function _onEscKey(event){var focusedItem=this.focusedItem;if(focusedItem){focusedItem.blur();}},/**
     * Handler that is called when a keydown event is detected.
     *
     * @param {KeyboardEvent} event A keyboard event.
     */_onKeydown:function _onKeydown(event){if(!this.keyboardEventMatchesKeys(event,'up down esc')){// all other keys focus the menu item starting with that character
this._focusWithKeyboardEvent(event);}event.stopPropagation();},// override _activateHandler
_activateHandler:function _activateHandler(event){IronSelectableBehavior._activateHandler.call(this,event);event.stopPropagation();},/**
     * Updates this element's tab index when it's enabled/disabled.
     * @param {boolean} disabled
     */_disabledChanged:function _disabledChanged(disabled){if(disabled){this._previousTabIndex=this.hasAttribute('tabindex')?this.tabIndex:0;this.removeAttribute('tabindex');// No tabindex means not tab-able or select-able.
}else if(!this.hasAttribute('tabindex')){this.setAttribute('tabindex',this._previousTabIndex);}}};IronMenuBehaviorImpl._shiftTabPressed=false;/** @polymerBehavior */var IronMenuBehavior=[IronMultiSelectableBehavior,IronA11yKeysBehavior,IronMenuBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
   * `IronMenubarBehavior` implements accessible menubar behavior.
   *
   * @polymerBehavior IronMenubarBehavior
   */var IronMenubarBehaviorImpl={hostAttributes:{'role':'menubar'},/**
     * @type {!Object}
     */keyBindings:{'left':'_onLeftKey','right':'_onRightKey'},_onUpKey:function _onUpKey(event){this.focusedItem.click();event.detail.keyboardEvent.preventDefault();},_onDownKey:function _onDownKey(event){this.focusedItem.click();event.detail.keyboardEvent.preventDefault();},get _isRTL(){return window.getComputedStyle(this)['direction']==='rtl';},_onLeftKey:function _onLeftKey(event){if(this._isRTL){this._focusNext();}else{this._focusPrevious();}event.detail.keyboardEvent.preventDefault();},_onRightKey:function _onRightKey(event){if(this._isRTL){this._focusPrevious();}else{this._focusNext();}event.detail.keyboardEvent.preventDefault();},_onKeydown:function _onKeydown(event){if(this.keyboardEventMatchesKeys(event,'up down left right esc')){return;}// all other keys focus the menu item starting with that character
this._focusWithKeyboardEvent(event);}};/** @polymerBehavior */var IronMenubarBehavior=[IronMenuBehavior,IronMenubarBehaviorImpl];/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */ /**
  Material design: [Radio
  button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

  `paper-radio-group` allows user to select at most one radio button from a set.
  Checking one radio button that belongs to a radio group unchecks any
  previously checked radio button within the same group. Use
  `selected` to get or set the selected radio button.

  The <paper-radio-buttons> inside the group must have the `name` attribute
  set.

  Example:

      <paper-radio-group selected="small">
        <paper-radio-button name="small">Small</paper-radio-button>
        <paper-radio-button name="medium">Medium</paper-radio-button>
        <paper-radio-button name="large">Large</paper-radio-button>
      </paper-radio-group>

  Radio-button-groups can be made optional, and allow zero buttons to be selected:

      <paper-radio-group selected="small" allow-empty-selection>
        <paper-radio-button name="small">Small</paper-radio-button>
        <paper-radio-button name="medium">Medium</paper-radio-button>
        <paper-radio-button name="large">Large</paper-radio-button>
      </paper-radio-group>

  See <a href="paper-radio-button">paper-radio-button</a> for more
  information about `paper-radio-button`.


  Custom property | Description | Default
  ----------------|-------------|----------
  `--paper-radio-group-item-padding` | The padding of the item | `12px`

  @group Paper Elements
  @element paper-radio-group
  @demo demo/index.html
  */Polymer({_template:html(_templateObject22_593e7270f77111e88ec25b7f4da4f001()),is:'paper-radio-group',behaviors:[IronMenubarBehavior],/** @private */hostAttributes:{role:'radiogroup'},properties:{/**
       * Fired when the radio group selection changes.
       *
       * @event paper-radio-group-changed
       */ /**
       * Overriden from Polymer.IronSelectableBehavior
       */attrForSelected:{type:String,value:'name'},/**
       * Overriden from Polymer.IronSelectableBehavior
       */selectedAttribute:{type:String,value:'checked'},/**
       * Overriden from Polymer.IronSelectableBehavior
       */selectable:{type:String,value:'paper-radio-button'},/**
       * If true, radio-buttons can be deselected
       */allowEmptySelection:{type:Boolean,value:false}},/**
     * Selects the given value.
     */select:function select(value){var newItem=this._valueToItem(value);if(newItem&&newItem.hasAttribute('disabled')){return;}if(this.selected){var oldItem=this._valueToItem(this.selected);if(this.selected==value){// If deselecting is allowed we'll have to apply an empty selection.
// Otherwise, we should force the selection to stay and make this
// action a no-op.
if(this.allowEmptySelection){value='';}else{if(oldItem)oldItem.checked=true;return;}}if(oldItem)oldItem.checked=false;}IronSelectableBehavior.select.apply(this,[value]);this.fire('paper-radio-group-changed');},_activateFocusedItem:function _activateFocusedItem(){this._itemActivate(this._valueForItem(this.focusedItem),this.focusedItem);},_onUpKey:function _onUpKey(event){this._focusPrevious();event.preventDefault();this._activateFocusedItem();},_onDownKey:function _onDownKey(event){this._focusNext();event.preventDefault();this._activateFocusedItem();},_onLeftKey:function _onLeftKey(event){IronMenubarBehaviorImpl._onLeftKey.apply(this,arguments);this._activateFocusedItem();},_onRightKey:function _onRightKey(event){IronMenubarBehaviorImpl._onRightKey.apply(this,arguments);this._activateFocusedItem();}});/*
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
   */});