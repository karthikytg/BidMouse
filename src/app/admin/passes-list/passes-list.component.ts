import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { PassesService } from 'src/app/_services/passes.service';

@Component({
  selector: 'app-passes-list',
  templateUrl: './passes-list.component.html',
  styleUrls: ['./passes-list.component.scss']
})
export class PassesListComponent implements OnInit {
  public products: any = [];
  public tempProducts: any = [];
  public showSearch = false;
  public searchPattern = '';
  search: any;
  constructor(private hService: HomeService,
    private pS: PassesService,
     private router: Router) { }

  ngOnInit(): void {
    this.hService.hideNav();
    // this.products = [];
    this.pS.getPasses().subscribe(res => {
      console.log('>> ', res);
      this.products = res.rows;
      this.products.map((m: any) => {
        m.acc = false;
      });
      this.tempProducts = this.products;
    }, err => {
      alert('Error while fetching passes list !')
    })
  }
  navTo(a: any, id: any) {
    if (a === 'vpd') {
      this.router.navigate(['/passes-manage/view/'+id]); 
    }
    if (a !== 'vpd') {
      this.router.navigate(['/passes-manage/'+a+'/'+id]); 
    }
  }
  toggleSearchShow() {
    this.showSearch = !this.showSearch;
  }
  searchProducts() {
    this.products = this.tempProducts.filter((f: any) => {
      if (f.pname) {
        return (f.pname.toLowerCase()).includes((this.search.toLowerCase()));
      } else {
        return false;
      }
      
    })
  }
  deletePassById(id: any) {
    if (confirm('Would you like to delete this pass')) {
      this.pS.deletePassById(id).subscribe(res => {
        alert(res.message);
        window.location.reload();
      }, err => {
        alert('Error while delete passe !')
      });
    }
  }

  activateOrDeactivate(id: any, status: any) {
    if (confirm('Would you like to '+status+' this pass')) {
      const data = {
        id,
        status
      }
      this.pS.aodPass(data).subscribe(res => {
        alert(res.message);
        window.location.reload();
      }, err => {
        alert('Error while '+status+' passe !')
      });
    }
  }
}
