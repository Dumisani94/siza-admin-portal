import { Component } from '@angular/core';

@Component({ standalone: true, template: `
<div class="breadcrumbs">Providers / CleanPro Services / Verification</div><h1>Provider Approval</h1>
<div class="grid-2"><div class="panel"><h3>Verification Documents</h3><div class="doc-row">📄 ID Document <a>View</a></div><div class="doc-row">📄 Proof of Address <a>View</a></div><div class="doc-row">📄 Company Registration <a>View</a></div><div class="doc-row">📄 Insurance Certificate <a>View</a></div></div><div class="panel"><h3>Admin Notes</h3><textarea rows="9">Looks good. All documents are valid.</textarea></div></div>
<div class="actions top-gap"><button class="btn success">Approve Provider</button><button class="btn danger">Reject Provider</button><button class="btn primary-outline">Request More Information</button></div>`})
export class ProviderApprovalComponent {}
