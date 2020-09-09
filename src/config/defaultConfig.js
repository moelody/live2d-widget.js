/**
 * @description The storage of configs. Intend to unify serverJs and clientJs's config
 */

/**
 * Default settings for defaulter
 * @type {Object}
 */

const defaultConfig = {
  model: {
    homePath: '',
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
    bottom: '90%',
    hOffset: 20,
    border: '1px solid rgba(224, 186, 140, .62)',
    borderDark: '1px solid rgba(6, 6, 6, .3)',
    background: 'rgba(236, 217, 188, .5)',
    backgroundDark: 'rgba(18,18,18,.7)',
    script: null
  },
  tool: {
    enable: false,
    position: 'left',
    top: '10%',
    hOffset: 20,
    color: '#7b8c9d',
    colorHover: '##0684bd',
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
