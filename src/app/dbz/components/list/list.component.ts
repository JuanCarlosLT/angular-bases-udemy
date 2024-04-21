import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/chararcter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() characterList: Character[] = [{
    id: '',
    name: '',
    power: 0
  }];

  @Output() onDeleteId: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id: string): void {
    this.onDeleteId.emit(id);
  }

}
