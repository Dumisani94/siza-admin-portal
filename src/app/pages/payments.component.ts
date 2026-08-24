import { Component } from '@angular/core';
@Component({ standalone: true, template: `
<div class="page-head"><div><h1>Payments</h1><p>Track transactions, commission and provider payouts</p></div><button class="btn">⇩ Export</button></div>
<div class="panel"><div class="filters"><select><option>Status: All</option></select><input type="date"></div><table><thead><tr><th>Transaction ID</th><th>Booking Ref</th><th>Provider</th><th>Service Amount</th><th>SIZA Commission</th><th>Provider Amount</th><th>Status</th><th>Date</th></tr></thead><tbody>
<tr><td>TXN-000125</td><td>BK-000125</td><td>CleanPro Services</td><td>R 650.00</td><td>R 65.00</td><td>R 585.00</td><td><span class="badge success">Paid</span></td><td>24 May 2026</td></tr>
<tr><td>TXN-000124</td><td>BK-000124</td><td>Bright Electrical</td><td>R 1,250.00</td><td>R 125.00</td><td>R 1,125.00</td><td><span class="badge success">Paid</span></td><td>24 May 2026</td></tr>
<tr><td>TXN-000123</td><td>BK-000123</td><td>Green Gardens</td><td>R 800.00</td><td>R 80.00</td><td>R 720.00</td><td><span class="badge success">Paid</span></td><td>23 May 2026</td></tr>
</tbody></table></div>
<div class="summary-grid"><div><small>Total Service Amount</small><strong>R 4,150.00</strong></div><div><small>Total Commission</small><strong>R 415.00</strong></div><div><small>Total Provider Payout</small><strong>R 3,735.00</strong></div></div>`})
export class PaymentsComponent {}
