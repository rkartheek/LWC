import { LightningElement, track } from 'lwc';
export default class ModalParent extends LightningElement {
    @track showModal = false;
    showHandler() {
        this.showModal = true;
    }
    modalCloseHandler() {
        this.showModal = false;
    }
}