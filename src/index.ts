import * as ko from 'knockout';
import { Observable, ObservableArray, PureComputed } from 'knockout';
import './style.css';

class KnockoutApp {
  name: Observable<string>;
  buttons: ObservableArray<number>;

  constructor() {
    this.name = ko.observable('Maciek');

    this.buttons = ko.observableArray(range(144));
  }

  fetchItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          data: ['Hello', 'Darkness', 'My', 'Old', 'Friend'],
        });
      }, 1000);
    });
  }
}

class LoadingButton {
  buttonText: Observable<string>;
  isLoading: Observable<boolean>;

  onClick: () => void;

  constructor(params: any) {
    this.buttonText = ko.observable(params.buttonText);
    this.isLoading = ko.observable(false);

    this.onClick = () => {
      this.isLoading(true);
      this.buttonText('Loading');

      params.action().then((d: any) => {
        this.isLoading(false);
        this.buttonText(params.buttonText);

        console.log('Fetched');
      });
    };

    console.log(params);
  }
}

ko.components.register('loading-button', {
  viewModel: LoadingButton,
  template: `
    <button data-bind="click: onClick, css: { loading: isLoading }">
      <span data-bind="text: buttonText"></span>
    </button>
  `,
});

ko.applyBindings(new KnockoutApp(), document.querySelector('#app'));

function range(n: number) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}
