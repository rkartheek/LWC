import { LightningElement, track } from 'lwc';
export default class ProgressBarParentComponent extends LightningElement {
    @track percentage = 10
    changeColor() {
        this.template.querySelector('c-progress-bar-api-child-component').changeBarColor();
    }
}