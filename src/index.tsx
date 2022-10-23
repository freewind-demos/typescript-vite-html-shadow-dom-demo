import './index.css';

function run<T>(fn: () => T) {
  return fn();
}

class PopUpInfo extends HTMLElement {
  constructor() {
    // 必须首先调用 super 方法
    super();

    const shadow = this.attachShadow({mode: 'open'});

    // 元素的具体功能写在下面
    // 创建 span
    const wrapper = run(() => {
      const wrapper = document.createElement('span');
      wrapper.setAttribute('class', 'wrapper');
      return wrapper;
    })

    const icon = run(() => {
      const icon = document.createElement('span');
      icon.setAttribute('class', 'icon');
      icon.setAttribute('tabindex', '0');
      return icon;
    })

    // 插入 icon
    const img = run(() => {
      const imgUrl = this.hasAttribute('img') ? this.getAttribute('img')! : 'img/default.png';
      const img = document.createElement('img') as HTMLImageElement;
      img.src = imgUrl;
      return img;
    })

    const info = run(() => {
      const info = document.createElement('div');
      info.setAttribute('class', 'info');

      // 获取属性的内容并将内容添加到 info 元素内
      const text = this.getAttribute('text');
      info.textContent = text;
      return info;
    })

    icon.appendChild(img);


    const style = run(() => {
      const style = document.createElement('style');

      style.textContent = `
.info {
border: 1px solid red;
}
`;
      return style;
    })

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }

}


customElements.define('popup-info', PopUpInfo);
