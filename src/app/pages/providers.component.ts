import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ standalone: true, imports: [RouterLink], template: `
<div class="page-head"><div><h1>Service Providers</h1><p>Manage and verify providers</p></div><button class="btn primary">+ Add Provider</button></div>
<div class="panel"><div class="filters"><input placeholder="Search provider name"><select><option>Status: All</option></select><select><option>Verification: All</option></select><select><option>Category: All</option></select></div>
<table><thead><tr><th>Provider</th><th>Category</th><th>Phone</th><th>Location</th><th>Verification</th><th>Status</th><th>Actions</th></tr></thead><tbody>
<tr><td>CleanPro Services</td><td>Cleaning</td><td>082 111 2222</td><td>Johannesburg</td><td><span class="badge warning">Pending</span></td><td><span class="badge success">Active</span></td><td><a routerLink="/providers/1">👁</a> ✎</td></tr>
<tr><td>Bright Electrical</td><td>Electrical</td><td>082 222 3333</td><td>Pretoria</td><td><span class="badge success">Approved</span></td><td><span class="badge success">Active</span></td><td><a routerLink="/providers/2">👁</a> ✎</td></tr>
<tr><td>Green Gardens</td><td>Gardening</td><td>083 333 4444</td><td>Durban</td><td><span class="badge success">Approved</span></td><td><span class="badge success">Active</span></td><td><a routerLink="/providers/3">👁</a> ✎</td></tr>
<tr><td>Quick Plumbing</td><td>Plumbing</td><td>084 444 5555</td><td>Cape Town</td><td><span class="badge warning">Pending</span></td><td><span class="badge danger">Inactive</span></td><td><a routerLink="/providers/4">👁</a> ✎</td></tr>
</tbody></table></div>` })
export class ProvidersComponent {}
