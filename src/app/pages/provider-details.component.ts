import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ standalone: true, imports: [RouterLink], template: `
<div class="breadcrumbs">Providers / CleanPro Services</div>
<div class="page-head"><div class="provider-title"><div class="avatar provider-avatar">CP</div><div><h1>CleanPro Services <span class="badge warning">Pending</span></h1><p>cleanpro@email.com · Johannesburg, Gauteng</p></div></div><div class="actions"><a routerLink="/providers/1/approval" class="btn success">Approve</a><button class="btn danger">Reject</button><button class="btn">More ▾</button></div></div>
<div class="tabs"><span class="active">Overview</span><span>Services</span><span>Documents</span><span>Bookings</span><span>Payments</span><span>Reviews</span><span>Activity</span></div>
<div class="grid-2"><div class="panel"><h3>Business Information</h3><dl><dt>Business Name</dt><dd>CleanPro Services</dd><dt>Registration Number</dt><dd>2021/123456/07</dd><dt>VAT Number</dt><dd>4700108756</dd><dt>Business Address</dt><dd>45 Clean Street, Randburg, Johannesburg, 2194</dd><dt>Description</dt><dd>Professional cleaning services for homes, offices and commercial properties.</dd></dl></div><div class="panel"><h3>Verification</h3><dl><dt>Status</dt><dd><span class="badge warning">Pending</span></dd><dt>Submitted On</dt><dd>24 May 2026, 09:15</dd></dl><h4>Documents Submitted</h4><ul class="check-list"><li>✓ ID Document</li><li>✓ Proof of Address</li><li>✓ Company Registration</li><li>✓ Insurance Certificate</li></ul></div></div>`})
export class ProviderDetailsComponent {}
