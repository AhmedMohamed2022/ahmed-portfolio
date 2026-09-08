import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Shared line-icon set, styled to match the Figma design's icon
 * language (thin 2px stroke, rounded caps/joins, currentColor) —
 * used everywhere a component previously rendered an emoji.
 *
 * Usage:  <app-icon name="zap"></app-icon>
 *         <app-icon name="cloud" [size]="24"></app-icon>
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      [ngSwitch]="name"
    >
      <!-- .NET / performance / deployment -->
      <polygon
        *ngSwitchCase="'zap'"
        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      />

      <!-- Angular / component code -->
      <ng-container *ngSwitchCase="'code'">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </ng-container>

      <!-- Cloud native / cloud & devops -->
      <path
        *ngSwitchCase="'cloud'"
        d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
      />

      <!-- Clean architecture / layered systems -->
      <ng-container *ngSwitchCase="'layers'">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </ng-container>

      <!-- Backend -->
      <ng-container *ngSwitchCase="'terminal'">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </ng-container>

      <!-- Frontend -->
      <ng-container *ngSwitchCase="'monitor'">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </ng-container>

      <!-- Database -->
      <ng-container *ngSwitchCase="'database'">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </ng-container>

      <!-- Improvement / growth metrics -->
      <ng-container *ngSwitchCase="'trending-up'">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </ng-container>

      <!-- Completed / delivered -->
      <ng-container *ngSwitchCase="'check-circle'">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </ng-container>

      <!-- Years / dates -->
      <ng-container *ngSwitchCase="'calendar'">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </ng-container>

      <!-- Degree / diploma -->
      <ng-container *ngSwitchCase="'award'">
        <path d="M22 10 12 4.5 2 10l10 5.5L22 10Z" />
        <path d="M6 12.2V17c0 1.1 2.7 3 6 3s6-1.9 6-3v-4.8" />
      </ng-container>

      <!-- Academic / bachelor's -->
      <ng-container *ngSwitchCase="'book-open'">
        <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
        <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
      </ng-container>

      <!-- Containers / Docker -->
      <ng-container *ngSwitchCase="'box'">
        <path
          d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8"
        />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </ng-container>

      <!-- Location / institution -->
      <ng-container *ngSwitchCase="'map-pin'">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </ng-container>

      <!-- Email -->
      <ng-container *ngSwitchCase="'mail'">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22 6 12 13 2 6" />
      </ng-container>

      <!-- Name / person -->
      <ng-container *ngSwitchCase="'user'">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </ng-container>

      <!-- Subject / message -->
      <ng-container *ngSwitchCase="'message-square'">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        />
      </ng-container>

      <!-- Response time -->
      <ng-container *ngSwitchCase="'clock'">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </ng-container>
    </svg>
  `,
})
export class IconComponent {
  @Input() name = '';
  @Input() size = 20;
}
