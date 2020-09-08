/**
 * @description The storage of configs. Intend to unify serverJs and clientJs's config
 */

/**
 * Default settings for defaulter
 * @type {Object}
 */

const defaultConfig = {
  model: {
    listPath: '',
    tipPath: '',
    jsonPath: 'https://unpkg.com/live2d-widget-model-hijiki@latest/assets/hijiki.model.json',
    scale: 1,
  },
  display: {
    superSample: 2,
    width: 250,
    height: 250,
    position: 'right',
    hOffset: 100,
    vOffset: 20,
  },
  mobile: {
    show: true,
    scale: 0.8,
    motion: true,
  },
  name: {
    canvas: 'live2dcanvas',
    div: 'live2d-widget',
  },
  react: {
    opacity: 1,
  },
  dev: {
    border: false
  },
  dialog: {
    enable: false,
    bottom: '',
    script: null
  },
  tool: {
    enable: false,
    position: 'left',
    top: '',
    hitokoto: {
      enable: true,
      param: ''
    },
    plane: true,
    camera: true,
    model: true,
    texture: true
  }
}

module.exports = defaultConfig;
