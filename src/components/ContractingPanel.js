import React, {Component} from 'react';

export class ContractingPanel extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30">
                            <a href="https://www.outcomesmtm.com"><img src="http://www.outcomesmtm.com/wp-content/uploads/2017/11/outcomesmtm_logo.svg" width="30%" /></a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30 text-center">
                            <h2>Independent Pharmacy Agreement</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30">
                            <div className="tour-booking-form">
                                <form>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <h4 className="tour-form-title">Contractual Information (where contractual notifications should be sent)</h4>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualFirstName">First Name</label>
                                                <input id="txtContractualFirstName" type="text" placeholder="First Name"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualLastName"> Last Name</label>
                                                <input id="txtContractualLastName" type="text" placeholder="Last Name"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualTitle">Title</label>
                                                <input id="txtContractualTitle" type="text" placeholder="Title"
                                                       className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualCompany"> Company</label>
                                                <input id="txtContractualCompany" type="text" placeholder="Company"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualAddress1">Address 1</label>
                                                <input id="txtContractualAddress1" type="text" placeholder="Address 1"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualAddress2"> Address 2</label>
                                                <input id="txtContractualAddress2" type="text" placeholder="Address 2"
                                                       className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualCity">City</label>
                                                <input id="txtContractualCity" type="text" placeholder="City ..."
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label required"
                                                       htmlFor="drpContractualState">State</label>
                                                <div className="select">
                                                    <select id="drpContractualState" name="select" className="form-control">
                                                        <option value="">Straight to Hell!</option>
                                                        <option value="">Iowa</option>
                                                        <option value="">Illinois</option>
                                                        <option value="">Minnesota</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label required"
                                                       htmlFor="txtContractualCounty">County</label>
                                                <div className="select">
                                                    <select id="txtContractualCounty" name="select" className="form-control">
                                                        <option value="">Dallas</option>
                                                        <option value="">Polk</option>
                                                        <option value="">Appanoose</option>
                                                        <option value="">Pottawatamie</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualZip">Zip</label>
                                                <input id="txtContractualZip" type="text" placeholder="(111) 111-1111"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualPhone">Phone</label>
                                                <input id="txtContractualPhone" type="text" placeholder="(000) 000-0000"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualFax">Fax</label>
                                                <input id="txtContractualFax" type="text" placeholder="(111) 111-1111"
                                                       className="form-control" required />
                                            </div>
                                        </div>


                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualEmail">Email</label>
                                                <input id="txtContractualEmail" type="text" placeholder="youremail@address.com"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualNABP">NABP / NCPDP (7 digits)</label>
                                                <input id="txtContractualNABP" type="text" placeholder="NABP / NCPDP"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtContractualNPI"> NPI (10 digits)</label>
                                                <input id="txtContractualNPI" type="text" placeholder="NPI"
                                                       className="form-control" />
                                            </div>
                                        </div>


                                        {/* ---------- End Primary Contact Information ------------- */}

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt30">
                                            <h4 className="tour-form-title">Location Information (where provision of MTM services will be based)</h4>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt30">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="chkLocationInformationFromContractualInformation" Checked="false" /> Same as contractual information above
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationFirstName">First Name</label>
                                                <input id="txtLocationFirstName" type="text" placeholder="First Name"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationLastName"> Last Name</label>
                                                <input id="txtLocationLastName" type="text" placeholder="Last Name"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationTitle">Title</label>
                                                <input id="txtLocationTitle" type="text" placeholder="Title"
                                                       className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationCompany"> Company</label>
                                                <input id="txtLocationCompany" type="text" placeholder="Company"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationAddress1">Address 1</label>
                                                <input id="txtLocationAddress1" type="text" placeholder="Address 1"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationAddress2"> Address 2</label>
                                                <input id="txtLocationAddress2" type="text" placeholder="Address 2"
                                                       className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationCity">City</label>
                                                <input id="txtLocationCity" type="text" placeholder="Ahmedabad"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label required"
                                                       htmlFor="drpLocationState">State</label>
                                                <div className="select">
                                                    <select id="drpLocationState" name="drpLocationState" className="form-control">
                                                        <option value="">Straight to Hell!</option>
                                                        <option value="">Iowa</option>
                                                        <option value="">Illinois</option>
                                                        <option value="">Minnesota</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label required"
                                                       htmlFor="txtLocationCounty">County</label>
                                                <div className="select">
                                                    <select id="txtLocationCounty" name="txtLocationCounty" className="form-control">
                                                        <option value="">Dallas</option>
                                                        <option value="">Polk</option>
                                                        <option value="">Appanoose</option>
                                                        <option value="">Pottawatamie</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationZip">Zip</label>
                                                <input id="txtLocationZip" type="text" placeholder="(111) 111-1111"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationPhone">Phone</label>
                                                <input id="txtLocationPhone" type="text" maxLength="13" placeholder="(000) 000-0000"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationFax">Fax</label>
                                                <input id="txtLocationFax" type="text" maxLength="13" placeholder="(111) 111-1111"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationEmail">Email</label>
                                                <input id="txtLocationEmail" type="text" placeholder="youremail@address.com"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationNABP">NABP / NCPDP (7 digits)</label>
                                                <input id="txtLocationNABP" type="text" placeholder="NABP / NCPDP"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtLocationNPI"> NPI (10 digits)</label>
                                                <input id="txtLocationNPI" type="text" placeholder="NPI"
                                                       className="form-control" />
                                            </div>
                                        </div>

                                        {/* ---------- End Location Contact Information ------------- */}

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt30">
                                            <h4 className="tour-form-title">Accounting Information (where MTM claims payment should be sent)</h4>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt30">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="chkAccountingInformationFromContractualInformation" AutoPostBack="true" Checked="false" /> Same as contractual information above
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="chkAccountingInformationFromLocationInformation" AutoPostBack="true" Checked="false" /> Same as location information above
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingBusinessName">Business Name</label>
                                                <input id="txtAccountingBusinessName" type="text" maxLength="100" placeholder="Business Name"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingDepartment"> Department</label>
                                                <input id="txtAccountingDepartment" type="text" maxLength="50" placeholder="Department"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingAddress1">Address 1</label>
                                                <input id="txtAccountingAddress1" type="text" placeholder="Address 1"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingAddress2"> Address 2</label>
                                                <input id="txtAccountingAddress2" type="text" placeholder="Address 2"
                                                       className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingCity">City</label>
                                                <input id="txtAccountingCity" type="text" maxLength="50" placeholder="Ahmedabad"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label required"
                                                       htmlFor="drpAccountingState">State</label>
                                                <div className="select">
                                                    <select id="drpAccountingState" name="select" className="form-control">
                                                        <option value="">Straight to Hell!</option>
                                                        <option value="">Iowa</option>
                                                        <option value="">Illinois</option>
                                                        <option value="">Minnesota</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label required"
                                                       htmlFor="select">County</label>
                                                <div className="select">
                                                    <select id="select" name="select" className="form-control">
                                                        <option value="">Dallas</option>
                                                        <option value="">Polk</option>
                                                        <option value="">Appanoose</option>
                                                        <option value="">Pottawatamie</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingZip">Zip</label>
                                                <input id="txtAccountingZip" type="text" placeholder="(111) 111-1111"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingPhone">Phone</label>
                                                <input id="txtAccountingPhone" type="text" placeholder="(000) 000-0000"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingFax">Fax</label>
                                                <input id="txtAccountingFax" type="text" maxLength="13" placeholder="(111) 111-1111"
                                                       className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="txtAccountingEmail">Email</label>
                                                <input id="txtAccountingEmail" type="text" maxLength="50" placeholder="youremail@address.com"
                                                       className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <p>&nbsp;</p>
                                        <hr />

                                        {/* ---------- End Business Account Contact Information ------------- */}



                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="textarea">Agreement</label>
                                                <div className="well wellContnr">
                                                    <div className="disclaimer">
                                                        <p align="center"><strong>MTM NETWORK PARTICIPATION AGREEMENT</strong></p>
                                                        <p>This MTM Network Participation Agreement (the "Agreement") by and between OUTCOMES INCORPORATED, an IOWA CORPORATION ("Outcomes") and the accepting party (&quot;Vendor&quot;) is entered into effective the date first accepted by Outcomes by virtue of its posting of this agreement electronically on www.outcomesmtm.com and by Vendor by virtue of its authorized representative electronically accepting the terms and conditions of this Agreement and thereby acknowledging his or her acceptance of such terms (the &quot;Effective Date&quot;) in order for Vendor to participate in the Outcomes Medication Therapy Management services network.</p>
                                                        <p>In consideration of the mutual promises, covenants, terms and conditions contained in this Agreement, the parties agree as set forth herein.</p>
                                                        <p>Any notice required or permitted hereunder shall be made in writing by certified mail, return receipt requested, addressed to the parties as hereinafter specified. For administrative simplification, such correspondence may alternatively be sent via regular mail, facsimile, electronic mail, or other manner; provided a voluntary, non-automated receipt confirmation is generated from receiving party. The parties shall notify the other in writing of any changes to the notice information provided below.</p>
                                                        <p align="center">Outcomes Incorporated<br />
                                                            Attention: Legal Department<br />
                                                            505 Market Street, Suite 200<br />
                                                            West Des Moines, IA 50266-3861<br />
                                                            <br />
                                                                Facsimile: 515-237-0002<br />
                                                                Electronic Mail: legal@outcomesmtm.com<br />
                                                        </p>
                                                        <p>Outcomes shall utilize the accounting information appearing as Accounting Information, as provided to Outcomes by Vendor, for payment and related accounting matters.</p>
                                                        <p align="center"><strong>ARTICLE I - DEFINITIONS</strong></p>
                                                        <p>For purposes of this Agreement, the following terms shall have the meanings set forth below:</p>
                                                        <p>1.1	<u>"Client"</u> means an individual or entity that has contracted with Outcomes to obtain MTM on behalf of one or more Members.</p>
                                                        <p>1.2	<u>"Client Agreement"</u> means a contractual agreement between Outcomes and a Client to cover payment for MTM delivered to Members in accordance with this Agreement.</p>
                                                        <p>1.3	<u>"Medication-related Problem"</u> means a health care issue related to the sub-optimal use of pharmaceuticals and shall include, without limitation, treatment failures, adverse drug reactions, medication errors, medication compliance problems, and cost-efficacy issues.</p>
                                                        <p>1.4	<u>"Medication Therapy Management"</u> and "MTM" means the services provided by pharmacists to facilitate the achievement of positive therapeutic and economic results from medication therapy as specifically described in Outcomes Policies and Procedures.</p>
                                                        <p>1.5	<u>"Member" and "Members"</u> means a person eligible to receive MTM from Vendor/MTM Center as notified in writing to Outcomes by Client.</p>
                                                        <p>1.6	<u>"MTM Center"</u> means a pharmacy, clinic, office, or other consultant setting designated by Vendor to provide MTM using the Outcomes System pursuant to this Agreement and subject to Outcomes' approval.</p>
                                                        <p>1.7	<u>"MTM Pharmacist"</u> means a pharmacist designated by Vendor to provide MTM using the Outcomes System pursuant to this Agreement and subject to Outcomes' approval.</p>
                                                        <p>1.8	<u>"MTM Provider"</u> means an MTM Pharmacist and/or an MTM Center.</p>
                                                        <p>1.9	<u>"Outcomes Policies &amp; Procedures"</u> means the policies and standard procedures for the provision of MTM in the Outcomes System, which may be amended by Outcomes from time to time. In the event of a material update to such policies and procedures, Outcomes agrees to issue a system alert to Vendor Administrator prior to such changes going into effect. </p>
                                                        <p>1.10	<u>"Outcomes System"</u> or "System" means the system developed by Outcomes for the delivery, documentation, billing, administration, advertising, promotion, or sale of MTM, including all copyrights, icons, forms, guides, logos, materials, media, processes, programming, protocols, reports and their format, pricing, data organization, source code, object code, service claims, techniques, trademarks, training and other associated documents or procedures developed by Outcomes.</p>
                                                        <p>1.11	<u>"Outcomes Training Program"</u> means instructional course work and curriculum designed and/or designated by Outcomes to train pharmacists and/or other pharmacy personnel on the delivery, documentation, billing, and administration of MTM in the Outcomes System, which may be adjusted by Outcomes from time to time.</p>
                                                        <p>1.12	<u>"Prescriber"</u> means any person legally authorized to prescribe pharmaceuticals for a Member.</p>
                                                        <p>1.13	<u>"Vendor Administrator"</u> means a person designated by Vendor/MTM Center to (1) manage access to the Outcomes System for all MTM Pharmacists and other MTM Center personnel on behalf of Vendor/MTM Center; and (2) distribute information received in System alerts to appropriate Vendor/MTM Center personnel.</p>
                                                        <p>1.14	<u>"Vendor/MTM Center"</u> means Vendor and/or each MTM Center, as applicable.</p>
                                                        <p>1.15	<u>"Term"</u> means the term of this Agreement as specified in Article V.</p>
                                                        <p align="center"><strong>ARTICLE II - OUTCOMES OBLIGATIONS</strong></p>
                                                        <p>2.1	<u>Access</u>. Outcomes shall provide Vendor/MTM Center with web-based access to necessary portions of the Outcomes System for the sole purpose of documenting and administering the provision of MTM by MTM Providers, excluding reasonable periods of System downtime and disruption of internet service beyond Outcomes' reasonable control. Outcomes reserves the right to suspend any MTM Provider's access to the Outcomes System if, in Outcomes' reasonable discretion, such MTM Provider has failed to comply with this Agreement, any applicable laws or regulations, or Outcomes' Policies &amp; Procedures or is otherwise detrimental to Outcomes.</p>
                                                        <p>2.2	<u>Warranty</u>. Outcomes represents that it has the right to grant Vendor/MTM Center access to the Outcomes System and that, to the best of its knowledge, neither the Outcomes System, nor Vendor/MTM Center's use or possession thereof, will violate or infringe any patent, copyright, trade secret or other proprietary right of any third party. </p>
                                                        <p>2.3	<u>Contracting</u>. Outcomes represents to Vendor/MTM Center that it has secured a Client Agreement with each Client to cover payment for MTM delivered to Members in accordance with this Agreement. Outcomes further represents and warrants to Vendor/MTM Center that it has entered into and has in effect a business associate agreement with each Client, whereby Outcomes is the business associate (as that term is defined at 45 C.F.R. 160.103) of each Client. As such, Outcomes has been granted authority by each Client to exchange protected health information (as that term is defined at 45 C.F.R. 160.103) pertaining to Client's Members for the purposes of facilitating provision of and payment for MTM.</p>
                                                        <p>2.4	<u>Payment Rates</u>. Outcomes shall compensate Vendor/MTM Center for the provision of MTM delivered to Members in accordance with the rates properly adjudicated within the Outcomes System upon claim approval. Under no circumstances shall Outcomes be required to compensate Vendor/MTM Center for provision of MTM to any person who is not a Member nor for any service which was not provided in accordance with Outcomes Policies and Procedures.</p>
                                                        <p>2.5	<u>Payment Cycle</u>. Outcomes shall compensate Vendor/MTM Center for the provision of MTM on no less than a monthly basis. Payment for valid claims shall be distributed no more than forty-five (45) days following the end of each month. Payment will be made by Outcomes to the Vendor/MTM Center using the address appearing as Accounting Information, as provided to Outcomes by Vendor/MTM Center, or to an authorized representative such as a Pharmacy Services Administration Organization (PSAO) who will accept payment from Outcomes and disburse to Vendor/MTM Center on Vendor/MTM Center's behalf. To avoid frequent de minimis payments, Outcomes reserves the right to accumulate amounts due until a minimum threshold of fifty dollars ($50) is payable. Upon termination of this Agreement, Outcomes shall compensate Vendor/MTM Center for all outstanding balances without regard to de minimis thresholds herein. </p>
                                                        <p>2.6	<u>Limitations</u>. Vendor/MTM Center understands and affirms that Outcomes serves as the payment processor between Client and Vendor/MTM Center for the provision of MTM and that payment for MTM to Vendor/MTM Center is expressly conditioned upon Outcomes' receipt of funds from the Client. In the event of Client default in payment, Outcomes and Vendor/MTM Center agree to cooperate in good faith to obtain payment in-full from Client for all services rendered. Vendor/MTM Center reserves the right to suspend provision of MTM to any Member for whom Client's late payment to Outcomes results in deficient payment to Vendor/MTM Center.</p>
                                                        <p>2.7	<u>Insurance</u>. Outcomes shall obtain and maintain in effect a program of self-insurance or a policy of insurance from a recognized carrier in such coverage amounts as is deemed reasonable and customary, or as required by law. Such coverage shall include no less than the following:</p>
                                                        <p>(a)	Workers compensation insurance as required by the laws of the state in which work is being performed;</p>
                                                        <p>(b)	Comprehensive general liability insurance with limits for bodily injury and property damage of $3,000,000 in the aggregate and $1,000,000 per occurrence;</p>
                                                        <p>(c)	Errors and omissions coverage with limits of $1,000,000 per occurrence.</p>
                                                        <p>2.8	<u>Technical Support</u>. Outcomes shall maintain technical support as described in the Outcomes Policies and Procedures. </p>
                                                        <p>2.9	<u>Reports</u>. Outcomes shall make reports on the status of MTM services available to Vendor/MTM Center in the Outcomes System, such reports shall contain updated MTM service claim information such as the claim date and the number and detail of pending and completed MTM service claims. </p>
                                                        <p align="center"><strong>ARTICLE III - VENDOR/MTM CENTER OBLIGATIONS</strong></p>
                                                        <p>3.1	<u>MTM Centers</u>. Vendor shall provide Outcomes with the MTM Center ID, in the form of a dispensing pharmacy's NCPDP number, to be included under this Agreement.</p>
                                                        <p>3.2	<u>MTM Provision</u>. Vendor/MTM Center shall ensure that only MTM Pharmacists practicing in conjunction with MTM Centers provide MTM pursuant to this Agreement. Vendor/MTM Center shall not subcontract the provision of MTM services without Outcomes' prior written authorization.</p>
                                                        <p>3.3	<u>Staffing</u>. Vendor/MTM Center shall maintain a sufficient number of MTM Pharmacists on duty at each MTM Center, along with sufficient facilities, equipment, and support personnel in order to provide MTM to Members in a timely and appropriate manner.</p>
                                                        <p>3.4	<u>Clients</u>. Vendor/MTM Center herein:</p>
                                                        <p>(a)	authorizes Outcomes to act as its agent to accept all payments from Clients for MTM provided pursuant to this Agreement.</p>
                                                        <p>(b)	authorizes Outcomes to accept all claims activity reports, remittance reports and other reports from Clients for MTM provided pursuant to this Agreement.</p>
                                                        <p>(c)	shall accept compensation from Outcomes as payment in-full for MTM provided pursuant to this Agreement, in accordance with the payment rate properly adjudicated within the Outcomes System upon claim approval.</p>
                                                        <p>(d)	shall indemnify and hold Clients harmless from any liability resulting from Outcomes' failure to pay Vendor/MTM Center any amounts already paid by Client to Outcomes for MTM provided pursuant to this Agreement.</p>
                                                        <p>(e)	shall abide by applicable terms of the Client Agreements that may not be included in this Agreement or the Outcomes Policies and Procedures. In the event Outcomes determines Vendor/MTM Center to be in violation of an applicable term of one or more Client Agreements, Outcomes shall provide notice of such violation to Vendor/MTM Center and the parties shall either determine a mutually agreeable corrective action plan or proceed with termination in accordance with Article V. </p>
                                                        <p>(f)	acknowledges and agrees that Client is a third-party beneficiary of this Agreement.</p>
                                                        <p>3.5	<u>Credentials</u>. Vendor/MTM Center shall, at its own expense, maintain and confirm all licenses, certifications, permits and other prerequisites required by law to provide MTM pursuant to this Agreement.</p>
                                                        <p>3.6	<u>Disclaimers</u>. Vendor/MTM Center acknowledges and agrees that all clinical and therapeutic decisions relating to the provision of MTM shall be the exclusive responsibility of Vendor, MTM Providers, Members, Prescribers and other health care professionals. Neither Outcomes nor Client shall be liable for any acts or omissions of Vendor/MTM Center or any MTM Provider. Neither Outcomes nor Client warrants any aspect, either express or implied, of any MTM provided by any MTM Provider.</p>
                                                        <p>3.7	<u>Warranty</u>. Vendor warrants that it has the right to and hereby contracts for services on behalf of the MTM Center included in this Agreement and binds that MTM Center to all relevant provisions and obligations herein including, but not limited to, section 6.5 Indemnification. Further, in the event that Vendor provides MTM to Medicare beneficiaries, the additional warranties set forth in Exhibit A shall apply. </p>
                                                        <p>3.8	<u>Insurance</u>. Vendor/MTM Center shall obtain and maintain in effect a policy of insurance for general and professional liability coverage purposes from a recognized carrier in such coverage amounts as is deemed reasonable and customary, or as required by law, for similar entities doing business in the state in which Vendor/MTM Center is located. Such coverage shall include no less than the following:</p>
                                                        <p>(a)	Workers compensation insurance as required by the laws of the state in which work is being performed; </p>
                                                        <p>(b)	Comprehensive general liability insurance with limits for bodily injury and property damage of $3,000,000 in the aggregate and $1,000,000 per occurrence;</p>
                                                        <p>(c)	Errors and omissions coverage with limits of $1,000,000 per occurrence;</p>
                                                        <p>(d)	Cyber Liability, including coverage for privacy, in an amount not less than $1,000,000 per occurrence.</p>
                                                        <p>Vendor shall provide evidence of insurance upon request. Any claims made policy shall be maintained for a minimum of 3 years after the expiration or termination of this Agreement. </p>
                                                        <p>3.9	<u>Vendor Administrator</u>. Vendor/MTM Center shall at all times designate one or more Vendor Administrators. In the event an unauthorized individual gains access to protected health information, Vendor/MTM Center shall indemnify and hold Clients and Outcomes harmless from any liability resulting from any breached information.</p>
                                                        <p>3.10	<u>Policies and Procedures</u>. Vendor/MTM Center shall abide by the policies and procedures set forth in Outcomes Policies &amp; Procedures. </p>
                                                        <p>3.11	<u>Activity</u>. Outcomes reserves the right to monitor and record all activity of any person using the Outcomes System. </p>
                                                        <p>3.12	<u>Reporting</u>. Vendor/MTM Center shall notify Outcomes in writing of (1) any unauthorized use or disclosure of Protected Health Information not permitted by this Agreement, including Breaches of Unsecured Protected Health Information as required by 45 C.F.R. Section 410; and (2) any Security Incident, without unreasonable delay and in no case later than 10 calendar days after discovery [45 U.S.C. Section 17921; 45 C.F.R. Section 164.410; 45 C.F.R. Section 164.504(e)(2)(ii)(C); 45 C.F.R. 314(a)(2)(i)(C)].</p>
                                                        <p align="center"><strong>ARTICLE IV - CONFIDENTIALITY</strong></p>
                                                        <p>4.1	<u>Confidential Information</u>. Except to the extent explicitly allowed under the terms of this Agreement, the parties hereto:</p>
                                                        <p>(a)	agree to keep in confidence during the Term of this Agreement and subsequent thereto all eligibility, financial, and other information identified by a party as proprietary ("Confidential Information").</p>
                                                        <p>(b)	shall not disclose to third parties or use such Confidential Information other than as needed to fulfill its obligations under this Agreement, except as otherwise specifically authorized in writing by the other party or as required by law.</p>
                                                        <p>Information in the public domain on the effective date of this Agreement or subsequently entering the public domain without breach by any of the parties is not Confidential Information.</p>
                                                        <p>4.2	<u>Proprietary Nature of Outcomes System</u>. Vendor/MTM Center acknowledges that the Outcomes System, Outcomes Policies and Procedures, and Outcomes Training Program (including, without limitation, the System and all rights associated with trade secrets, copyrights, trade names, service marks and trademarks related thereto) as well as all improvements, developments, derivatives or modifications to the Outcomes System (whether made by Outcomes or Vendor/MTM Center) constitutes Confidential Information and valuable proprietary assets of Outcomes, and that this Agreement shall not and does not provide the Vendor/MTM Center with any ownership interest therein, whether as a licensee or otherwise. Vendor/MTM Center and its respective employees, agents and representatives shall hold all information and material relating to the Outcomes System in confidence with the exception of information and material in the public domain on the effective date of this Agreement or subsequently entering the public domain without breach by Vendor/MTM Center. Further, Vendor/MTM Center agrees not to use for its own or another's benefit or to reveal any such information and material to any other person or entity except for uses explicitly authorized hereunder during the Term of this Agreement. Vendor/MTM Center shall not provide its Affiliates or any third party visual or operational access to the Outcomes System. This obligation shall survive the termination of this Agreement. </p>
                                                        <p>4.3	<u>Reverse Engineering</u>. Except as expressly permitted in the Agreement, Vendor/MTM Center shall not directly or indirectly do any of the following: (a) access, use, sell, distribute, sublicense, broadcast, or commercially exploit the Outcomes System or any rights under the Agreement, including, without limitation, any access or use of the Outcomes System on a service bureau basis or for any Vendor/MTM Center processing services beyond the scope specified in this Agreement (such as for any third parties on a rental or sharing basis); (b) knowingly introduce any infringing, obscene, libelous, or otherwise unlawful data or material into the System; (c) copy, modify, or prepare derivative works based on the Outcomes System; (d) reverse engineer, decompile, disassemble, or attempt to derive source code from the Outcomes System; or (e) remove, obscure, or alter any intellectual property right or confidentiality notices or legends appearing in or on any aspect of the Outcomes System. </p>
                                                        <p>4.4	<u>Equitable Relief</u>. Vendor/MTM Center acknowledges the value of Outcomes' proprietary rights and the irreparable injury that would result from violation of the provisions of Sections 4.2 and 4.3. Accordingly, Vendor/MTM Center agrees that Outcomes shall be entitled to seek injunctive or other equitable relief to prevent the threatened or further actual breach of Sections 4.2 and 4.3.<br />
                                                            <br />
                                                                4.5	<u>Return of Confidential Information</u>. Promptly upon the termination of this Agreement, Vendor/MTM Center shall return to Outcomes all of Outcomes' Confidential Information and materials and all copies of such information and materials, if any, in its possession. </p>
                                                        <p>4.6	<u>Vendor/MTM Center Protection</u>. Outcomes shall not use any name, trademark, service mark, trade name or other commercial or product designation belonging to Vendor/MTM Center without the prior written consent of Vendor/MTM Center in each instance, except for use in the routine course of business, which may include, but not necessarily be limited to, Client reporting, network management, and publication of directories. </p>
                                                        <p>4.7	<u>Survival</u>. The obligations of this Article IV shall survive the termination of this Agreement.<br />
                                                        </p>
                                                        <p align="center"><strong>ARTICLE V - TERM AND TERMINATION</strong></p>
                                                        <p>5.1	<u>Term</u>. The Term of this Agreement shall commence as of the Effective Date and shall continue until terminated by either Outcomes or Vendor, at any time, with or without cause, upon 30 days written notice to the other party.</p>
                                                        <p align="center"><strong>ARTICLE VI - GENERAL PROVISIONS</strong></p>
                                                        <p>6.1	<u>Audit</u>. Outcomes or its designee, which may include but not necessarily be limited to, the Centers for Medicare and Medicaid Services (CMS), US Department of Health and Human Services (HHS), US Comptroller General, or Client shall retain rights to reasonably audit for the Term and a period of ten (10) years from the termination of this Agreement any pertinent contracts, books, documents, papers, and records of Vendor/MTM Center that pertain to any aspect of the Vendor/MTM Center's duties or obligations under this Agreement. Vendor/MTM Center agrees to maintain such records for the period contemplated and make them available for inspection and audit upon ten (10) days written notice.</p>
                                                        <p>6.2	<u>Counterparts</u>. This Agreement or any addendum or amendment to this Agreement may be executed in counterparts, all of which taken together shall be deemed one original agreement, and shall be binding upon the parties hereto notwithstanding that all parties hereto are not signatory to the same counterpart.</p>
                                                        <p>6.3	<u>Exclusivity</u>. This Agreement is not exclusive and nothing herein shall be construed to prohibit the parties hereto from entering into similar agreements with other parties.</p>
                                                        <p>6.4	<u>Gender and Number</u>. Whenever used in this Agreement and as required by context, the masculine gender includes the feminine and/or neuter, and the singular number includes the plural.</p>
                                                        <p>6.5	<u>Indemnification</u>. The parties hereto agree to indemnify and hold the other party harmless from and against any claims, damages, losses, liabilities and expenses, including court costs and reasonable attorneys' fees, incurred by the other party to the extent that such claims, damages, losses, liabilities or expenses arise out of or are based upon the indemnifying party's gross negligence or willful misconduct in the performance of such indemnifying party's duties under this Agreement. These indemnification obligations shall survive termination of the Agreement.</p>
                                                        <p>6.6	<u>Independent Contractors</u>. Nothing in this Agreement shall create or be deemed or construed to create any relationship between the parties other than that of independent entities contracting with each other solely for the purpose of effecting the provisions of this Agreement. Neither the parties, nor any of their respective representatives, shall be construed to be the agent, employee, or representative of the other, nor shall any of the foregoing parties have any express or implied right or authority to assume or create any obligation or responsibility on behalf of or in the name of the other.</p>
                                                        <p>6.7	Jurisdiction. This Agreement is intentionally silent with regard to jurisdiction and venue and shall be governed in accordance with conflict of law provisions.</p>
                                                        <p>6.8	<u>Laws and Regulations</u>. The parties shall comply with all federal, state and local laws, rules, and regulations which are applicable to carrying out its obligations under this Agreement. In the event it is determined by any governmental agency that any regulatory license or approval of this Agreement or any activity undertaken by the parties under this Agreement's terms and conditions is required, then the parties:</p>
                                                        <p>(a)	shall be bound by and govern themselves in accordance with the requirements of the regulating entities unless and to the extent that the parties challenge such requirements, and</p>
                                                        <p>(b)	agree to cooperate and assist one another in obtaining such license and complying with such approvals and to modify this Agreement to the extent necessary to accommodate any such license or approvals.</p>
                                                        <p>6.9 <u>Equal Opportunity</u>. As applicable, each party and its subcontractors shall abide by the requirements of 41 CFR 60-300.5(a) and 60-741.5(a). These regulations prohibit discrimination against qualified individuals on the basis of protected veteran status or disability, and require affirmative action by covered prime contractors (as that term is defined in 41 CFR 60-300.2(p)) and subcontractors to employ and advance in employment qualified protected veterans and individuals with disabilities.</p>
                                                        <p>6.10	<u>HIPAA</u>. Both parties warrant they are familiar with requirements of the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and its accompanying regulations, and will comply with all applicable HIPAA requirements in the course of this contract. Both parties warrant they will cooperate with either party in the course of performance and coordination with either party's privacy officials and other documents that are necessary to keep both parties in compliance with HIPAA. </p>
                                                        <p>6.11	<u>Section Headings</u>. The section headings used in this Agreement have been inserted for convenience of reference only and shall not in any way modify or restrict any of its terms or provisions.</p>
                                                        <p>6.12	<u>Severability</u>. In the event one or more of the provisions contained in this Agreement are declared invalid, illegal, or unenforceable in any respect, the validity, legality, and enforceability of the remaining provisions shall not in any way be impaired thereby unless the effect of such invalidity is to substantially impair or undermine any of the party's rights and benefits hereunder.</p>
                                                        <p>6.13	<u>Waiver</u>. The failure of any party hereto to insist in any one or more instances upon performance of any terms or conditions of this Agreement shall not be construed as a waiver of future performance of any such term, covenant, or condition and the obligations of such party with respect thereto shall continue in full force and effect.</p>
                                                        <p>6.14	<u>Replacement</u>. This Agreement supersedes all prior agreements between the parties with respect to its subject matter and constitutes (along with the Exhibits referenced herein) a complete and exclusive statement of the terms of the agreement between the parties with respect to its subject matter. </p>
                                                        <p>END OF AGREEMENT</p>
                                                        <p align="center"><strong>EXHIBIT A – MEDICARE BENEFICIARY ADDITIONAL WARRANTIES</strong></p>
                                                        <p>In the event that Vendor provides MTM to Medicare beneficiaries, Vendor warrants (and agrees to attest upon Outcomes' request) the following with respect to any provision of MTM to Medicare beneficiaries:</p>
                                                        <p>(a)	Vendor's MTM Providers, employees, governing body members, officers and directors complete HIPAA/HITECH training within the first ninety (90) days of employment/contracting, and annually thereafter;</p>
                                                        <p>(b)	Vendor's MTM Providers, employees, governing body members, officers and directors complete the standardized general CMS compliance and Fraud, Waste and Abuse ("FWA") training and education module developed by the Centers for Medicare &amp; Medicaid Services ("CMS") within the first ninety (90) days of employment/contracting, and annually thereafter;</p>
                                                        <p>(c)	Vendor has adopted an effective compliance program which includes, at a minimum, written policies, procedures, and standards of conduct that articulate the Vendor's commitment to comply with all applicable federal and state laws; a conflict of interest reporting and review process; designation of a compliance officer and compliance committee; a process to communicate compliance related requirements to MTM Providers, governing body members, officers and directors; a process for individuals and downstream entities to report suspected FWA and compliance issues; a policy that protects individuals and downstream entities from retaliation when reporting suspected compliance and FWA issues; widely-publicized disciplinary standards; a process for identifying and monitoring compliance and FWA risks; and a policy requiring prompt response and correction to detected compliance issues;</p>
                                                        <p>(d)	Vendor has implemented policies and procedures to document the review of the Office of Inspector General ("OIG"), General Services Administration ("GSA") and Systems Award Management ("SAM") exclusion lists prior to initial hire/contracting and monthly thereafter to ensure that all of Vendor's downstream entities (including their employees, officers and governing body directors) and Vendor employees, including managers, officers, and governing body directors responsible for administering or delivering Medicare Part D or Medicare Advantage services are not excluded from participating in federally funded healthcare programs according to the OIG and GSA exclusion lists. Vendor further warrants that Vendor will promptly remove from providing such services on behalf of Outcomes any of Vendor's MTM Providers or employees and/or any of Vendor's downstream entities or their employees that are excluded from participating in federally funded healthcare programs according to these exclusion lists;</p>
                                                        <p>(e)	Vendor agrees to report compliance or FWA concerns to Outcomes, CMS or the Client. Reporting should occur within five (5) business days of discovery; if there is an immediate impact to beneficiary access to care and/or a financial strain, please report immediately but at least within twenty-four (24) hours. Outcomes and the Client has a no-tolerance policy for retaliation or retribution against any employee or Vendor for good-faith reporting of FWA.</p>
                                                        <p>(f)	Vendor (including Vendor's employees and MTM Providers performing Part D or Medicare Advantage services relative to a Part D Plan Sponsor or Medicare Advantage Organization) agrees to read and comply with any written compliance policies and procedures and standards of conduct made available by Outcomes, or comparable policies, procedures, or standards of conduct of its own that meet applicable CMS requirements; </p>
                                                        <p>(g)	Vendor has implemented written record retention policies and procedures to ensure that any documents, books and records that substantiate compliance with this attestation or related to Entity's performance of its obligations as a provider of Medicare Part D or Medicare Advantage services are retained for a period of at least ten (10) years and Vendor will provide CMS, or its designee with access to such records if requested; and</p>
                                                        <p>(h)	Vendor warrants that neither Vendor nor any downstream or related entity utilized by Vendor to provide MTM to Medicare beneficiaries on behalf of Outcomes utilizes an offshore vendor and/or subcontractor to provide said services. Vendor further attests that neither Vendor nor any downstream or related entity utilized by Vendor provides protected health information or "PHI" (as such term is defined at 45 C.F.R. §160.103) of a Medicare beneficiary to any offshore vendor and/or subcontractor. For the purposes of this attestation, the term "offshore" shall refer to any country that is not one of the fifty United States or one of the following United States Territories: American Samoa, Guam, Northern Marianas, Puerto Rico and the Virgin Islands.</p>
                                                        <p>&nbsp;</p>
                                                        <p>END OF EXHIBIT</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        {/* ---------- End Online Agreement Disclaimer ------------- */}


                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt30">
                                            <p><a href="http://www.outcomesmtm.com/wp-content/uploads/2018/02/MTM_Network_Agreement_Online_20170703.pdf">Print Agreeement</a></p>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> I am a legal representative of the party hereby contracting with OutcomesMTM and authorized to execute contractual agreements on its behalf.
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> I have read the above agreement and agree to the terms and conditions therein.
                                                </label>
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>


                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <button type="submit" name="submitButton" className="btn btn-primary pull-right">Submit
                                            </button>
                                        </div>

                                        <div className="clearfix"></div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center mt20">
                            Privacy Policy © 2012 Outcomes Incorporated. All Rights Reserved.
                        </div>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
        );
    }
};
