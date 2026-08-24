import { Component } from '@angular/core';
@Component({ standalone: true, template: `
<div class="page-head"><div><h1>Service Categories</h1><p>Manage the services offered on SIZA</p></div><button class="btn primary">+ Add Category</button></div>
<div class="panel"><table><thead><tr><th>#</th><th>Category Name</th><th>Icon</th><th>Status</th><th>Created On</th><th>Actions</th></tr></thead><tbody>
<tr><td>1</td><td>Plumbing</td><td>🔧</td><td><span class="badge success">Active</span></td><td>10 Apr 2026</td><td>👁 ✎ 🗑</td></tr>
<tr><td>2</td><td>Electrical</td><td>⚡</td><td><span class="badge success">Active</span></td><td>10 Apr 2026</td><td>👁 ✎ 🗑</td></tr>
<tr><td>3</td><td>Cleaning</td><td>🧹</td><td><span class="badge success">Active</span></td><td>10 Apr 2026</td><td>👁 ✎ 🗑</td></tr>
<tr><td>4</td><td>Gardening</td><td>🌿</td><td><span class="badge success">Active</span></td><td>10 Apr 2026</td><td>👁 ✎ 🗑</td></tr>
<tr><td>5</td><td>Handyman</td><td>🛠</td><td><span class="badge success">Active</span></td><td>10 Apr 2026</td><td>👁 ✎ 🗑</td></tr>
</tbody></table></div>`})
export class CategoriesComponent {}
