import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit{
  breadcrumbs: string[] = [];

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
        })
  }
  buildBreadcrumb(route: ActivatedRoute, url = '', breadcrumbs: string[] = []): string[] {
    const children: ActivatedRoute[] =  route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
        breadcrumbs.push(routeURL);
      }
      return this.buildBreadcrumb(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
