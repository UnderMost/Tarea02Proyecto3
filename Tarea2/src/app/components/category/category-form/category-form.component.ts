import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  @Input() category: ICategory =  {};
  @Input() action = '';
  @Output() callParentEvent: EventEmitter<ICategory> = new EventEmitter<ICategory>()

  callEvent() {
    this.callParentEvent.emit(this.category);
  }

}
