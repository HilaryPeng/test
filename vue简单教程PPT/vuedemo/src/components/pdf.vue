<template>
	<div id='pdf'>
        <div class="pdfcontent">
            <!-- 背景资料 -->
            <div class="table1" v-for='table1 in table1'>
                <p class='tabletit'>BACKGROUND INFORMATION</p>
                <table border="1" cellspacing="0" cellpadding="0" >
                    <tr class='information'>
                        <td>
                            <div class='tdcontent'>
                                <p>Project title:</p>
                                <p>{{table1.projectName}}</p>
                            </div>
                        </td>
                        <td>
                            <div class="tdcontent">
                                <p>Service Request Number:</p>
                                <p>{{table1.serveNeedNo}}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="tdcontent">
                                <p>Report Prepared by:</p>
                                <p>{{table1.principal}}</p>
                            </div>
                        </td>
                        <td>
                            <div class="tdcontent">
                                <p>Phone:</p>
                                <p>{{table1.mobile}}</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- 客户信息 -->
            <div class="table2 mt" v-for='table2 in table2'>
                <p class='tabletit'>CUSTOMER INFORMATION</p>
                <ul>
                    <li>
                        <ul class='clearfix'>
                            <li class='col-2'>
                                <div class="tdcontent">
                                    <p>Company name:</p>
                                    <p>{{table2.companyName}}</p>
                                </div>
                            </li>
                            <li class='col-2'>
                                <div class="tdcontent">
                                    <p>Company address:</p>
                                    <p>{{table2.companyAddress}}</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='clearfix'>
                            <li class='col-3'>
                                <div class='td_3content'>
                                    <p>Client's name for this project:</p>
                                    <p>{{table2.linkman}}</p>
                                </div>
                            </li>
                            <li class='col-3'>
                                <div class='td_3content'>
                                    <p>Component/Part number(s) for this project:</p>
                                    <p>{{table2.workpieceContent}}</p>
                                </div>
                            </li>
                            <li class='col-3'>
                                <div class='td_3content'>
                                    <p>Client's description of component(s):</p>
                                    <p>{{table2.workpieceNumber}}</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='clearfix'>
                            <li class='td_6' style='width:20%'>
                                <div class="td_6content">
                                    <p>What is the estimated number of parts requiring corrosion protection for this project (annual quantity, shipment):</p>
                                </div>
                            </li >
                            <li style='width:15%'>
                                <div class="td_6content">
                                    <p>{{table2.workpieceYearNumber}}</p>
                                </div>
                            </li>
                            <li style='width:20%'>
                                <div class="td_6content">
                                    <p>End user of component company name and location (e.g. Ford, VW, GE, etc.):</p>
                                </div>
                            </li>
                            <li style='width:15%'>
                                <div class="td_6content">
                                    <p>{{table2.terminalClientName}}</p>
                                    <p>{{table2.terminalClientAddress}}</p>
                                </div>
                            </li>
                            <li style='width:10%'>
                                <div class="td_6content">
                                    <p>Date of visit:</p>
                                </div>
                            </li>
                            <li style='width:20%'>
                                <div class="td_6content">
                                    <p>{{table2.callOnTime}}</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='table2_ul clearfix'>
                            <li class='col-4'>
                                <p>Names of client met at site:</p>
                            </li>
                            <li class='col-4'>
                                <p>Company & Title:</p>
                            </li>
                            <li class='col-4'>
                                <p>Authority to make purchase?</p>
                            </li>
                            <li class='col-4'>
                                <p>Influence on buying process?</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='table2_site clearfix'>
                            <li class='col-4'>
                                <p v-for='i in table2.list'>{{i.linkmanName}}</p>
                            </li>
                            <li class='col-4'>
                                <p v-for='i in table2.list'>{{i.linkCompanyName}}</p>
                            </li>
                            <li class='col-4'>
                                <p v-for='i in table2.list'>{{i.procurementRight}}</p>
                            </li>
                            <li class='col-4'>
                                <p v-for='i in table2.list'>{{i.procurementSway}}</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='table2_last2 clearfix'>
                            <li class='col-4'>
                                <p>Additional information about personnel met at site and/or other personnel that may influence the purchase of Zerust®</p>
                            </li>
                            <li class='col-4'>
                                <p>What is the client decision making process for products like Zerust® - e.g. stages, approvals, documentation requirements, etc.?
                                </p>
                            </li>
                            <li class='col-4'>
                                <p>What are the client's real objectives for this project? e.g. Cost savings, locate alternate supplier, meet end-use requirements, etc.?
                                </p>
                            </li>
                            <li class='col-4'>
                                <p>How did the client find out about Zerust®? Any other comments:
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                       <ul class='table2_site2 clearfix'>
                        <li class='col-4'>
                            <p></p>
                        </li>
                        <li class='col-4'>
                            <p></p>
                        </li>
                        <li class='col-4'>
                            <p></p>
                        </li>
                        <li class='col-4'>
                            <p></p>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
        <div class="table3" v-for='table3 in table3'>
          <p class='tabletit'>INCOMING COMPONENT (NEW RAW MATERIAL, UN-MACHINED PART, MACHINED PART, ETC.)</p>
          <table >
              <tr class='tbale3_firsttr'>
                  <td style='width:16%;height:90px'>
                      <p> Incoming product type: (e.g. ferrous, non-ferrous, powder metal, etc.)</p>
                    
                  </td>
                  <td style='width:16%'>
                      <p>Name of the supplier: (supplier can be an internal plant)</p>
                      <p></p>
                  </td>
                  <td style='width:20%'>
                      <p>Supplier location and other details:</p>
                  </td>
                  <td style='width:20%'>
                      <p>Mode of transportation from supplier location to plant:</p>
                  </td>
                  <td style='width:28%'>
                      <p>Description of packaging of incoming product:</p>
                  </td>
              </tr>
              <tr style='height:150px;text-align: center'>
                  <td style='width:15%;'>
                      <p>{{table3.receivedType}}</p>
                  </td>
                  <td style='width:15%'>
                      <p>{{table3.providerName}}</p>
                  </td>
                  <td style='width:20%'>
                       <p>{{table3.providerAddress}}</p>
                  </td>
                  <td style='width:20%'>
                      <p>{{table3.transportType}}</p>
                  </td>
                  <td style='width:30%'>
                      <p>{{table3.packContent}}
                        <img :src="i" v-for='i in img2'></p>
                   
                     
                  </td>
              </tr>
              <tr>
                 <td style='height:170px' colspan="2"  rowspan="3">
                     <p>Storage area description:
                        <span style='display:block'>{{table3.warehouseContent}}</span>
                     </p>
                    
                     </td>

                     <td >
                         <p>Temperature:</p>

                     </td>

                     <td >
                        <p>{{table3.warehouseTemp}}</p>
                     </td>
                     <td  rowspan="3" style='height:200px'>
                         <p>Description of quality control (QC) inspection of incoming parts (if applicable:
                        <span>{{table3.receivedQcContent}}</span>
                         </p>

                     </td>
                 </tr>
                 <tr>
                     <td >
                         <p>Relative humidity:</p>
                     </td>
                     <td >
                         <p>{{table3.warehouseRelativeHumidity}}</p>
                     </td>
                 </tr>
                 <tr>
                     <td >
                       <p>Length of time:</p>
                   </td>
                   <td>
                       <p>{{table3.warehouseRestingPeriod}}</p>
                   </td>
               </tr>
               <tr>
                  <td style='height:200px' colspan="2">
                     <p>Any signs of corrosion during QC?
                        <span>{{table3.expirationIsCorrode}}</span>
                     </p> 
                 </td>

                 <td style='height:100px' colspan="2">
                  <p>If yes, description and pattern of corrosion:
                    <span>{{table3.expirationContent}}</span>
                    <img :src="i" v-for='i in img3'>
                  </p></td>

                  <td style='height:200px'>
                      <p>Is the corrosion pattern specific to a particular lot or is it sporadic over different lots?
                        <span>{{table3.expirationStatus}}</span>
                      </p></td>
                  </tr>
                  <tr>
                      <td style='height:100px' rowspan="3" colspan="2">

                          <p>If the pattern is specific to a lot, please advise of any recent process changes made.
                            <span>{{table3.craftChangeContent}}</span>
                          </p>

                      </td>
                      <td style='height:100px' colspan="2">
                          <p>Are the parts manually handled during QC?<span>{{table3.workpieceIsLabour}}</span></p></td>
                          <td rowspan="3" style='height:200px'>
                              <p>Other relevant comments
                                <span>
                                    {{table3.otherContent}}
                                </span>
                              </p></td>
                          </tr>
                          <tr>
                              <td style='height:160px' colspan="2">
                                  <p>If yes, do workers wear gloves?<span>{{table3.labourIsGlove}}</span></p></td>
                              </tr>
                              <tr>
                                  <td style='height:100px'>
                                      <p>Glove change frequency:<span><p>{{table3. gloveChangeFrequency}}</p></span></p></td>
                                      <td style='height:100px'> 
                                          <p>Glove type used:<span>{{table3.gloveType}}</span></p></td>
                                      </tr>
                                  </table>
                              </div>


                              <div class="table4" v-for='table4 in table4'>
                               <p class='tabletit'>PROCESS MAPPING (CUTTING, DEBURRING, MACHINING, SINTERING, ETC.)</p>
                               <table>
                                <tr class='table4_tr1'>
                                    <td style='width:10%;height:80px'>
                                        <p>Process Name & Serial Number:</p>
                                    </td>
                                    <td style='width:10%'>
                                        <p>Description of the process:</p>
                                    </td>
                                    <td style='width:15%'>
                                        <p>Fluid(s) components:</p>
                                    </td>
                                    <td style='width:8%'>
                                        <p>Dilution %</p>
                                    </td>
                                    <td style='width:10%'>
                                        <p>Type of water userd:</p>
                                    </td>
                                    <td style='width:15%'>
                                        <p>Rrocess temperature and pH of the fluid:</p>
                                    </td>
                                    <td style='width:10%'>
                                        <p>Fluid change frequency: (e.g. 1 time/month)</p>
                                    </td>
                                    <td style='width:8%'>
                                        <p>MSDS Provided?</p>
                                    </td>
                                    <td style='width:15%'>
                                        <p>Fluid samples collected for testing: Pls. indicate if fluids are: New (N), Used (U) or Both (B)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td  rowspan="3">
                                        <p><span>{{table4.processName}}</span><span>{{table4.processNumber}}</span></p>
                                    </td>
                                    <td rowspan="3">
                                        <p>{{table4.processContent}}</p>
                                    </td>
                                    <td>
                                    <p>{{table4.mediaName}}</p></td>
                                    <td  style='height:60px'>
                                        <p>{{table4.useConcentration}}</p>
                                    </td>
                                    <td>
                                    <p>{{table4.cargilleType}}</p></td>
                                    <td rowspan="3">
                                    <p>
                                        <span>{{table4.mediaTemp}}</span>
                                        <span>{{table4.mediaPh}}</span>
                                        </p>
                                    </td>
                                    <td rowspan="3">
                                        <p>{{table4.cargilleChangeFrequency}}</p></td>
                                        <td rowspan="3">
                                        <p>{{table4.isMsds}}</p>
                                        </td>
                                        <td rowspan="3">
                                            <p>{{table4.samplingType}}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style='height:60px'>
                                         
                                        </td>

                                        <td></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td style='height:60px'></td>

                                        <td></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td rowspan="2" style='height:100px'>
                                            <p>Tank cleaning frequency:<span>{{table4.cargilleCleanFrequency}}</span></p>

                                        </td>
                                        <td style='height:100px'>
                                            <p>Any manual handling during the process?
                                            <span>{{table4.workpieceIsLabour}}</span>
                                            </p>
                                        </td>
                                        <td style='height:100px'><p style='height:100%'>Glove change frequency:
                                            <span>{{table4.gloveChangeFrequency}}</span>
                                        </p></td>
                                        <td colspan="3" style='height:100px'><p>Total process time (start to end):
                                            <span>{{table4.completeTime}}</span>
                                        </p></td>
                                        <td colspan="3" rowspan="2" style='height:100px'>
                                            <p>Work-in-process packaging details:
                                            <span>{{table4.beingPackContent}}</span></p>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td style='height:100px'>
                                            <p>If yes, do workers wear gloves?
                                            <span>{{table4.labourIsGlove}}</span></p>
                                        </td>
                                        <td style='height:100px'>
                                            <p>Glove type used:
                                           <span>{{table4.gloveType}}</span> 
                                            </p>
                                        </td>
                                        <td colspan="3" style='height:100px'>
                                            <p>Process change over time:    
                                            <span>{{table4.intervalTime}}</span></p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colspan="2" style='height:240px' rowspan="2">
                                            <p>Work-in-process storage details:<span>{{table4.beingStoreContent}}</span></p>
                                        </td>
                                        <td colspan="2" rowspan="2" style='height:240px'>
                                            <div class="three" style='height:240px'>
                                                <ul>
                                                    <li>
                                                        <p>Storage conditions: 
                                                         </p>
                                                    </li>
                                                    <li>
                                                        <p>Temperature:  
                                                        <span>{{table4.storeTemp}}</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>Relative humidity:
                                                        <span>{{table4.storeRelativeTemp}}</span></p>
                                                    </li>
                                                </ul>

                                            </div>
                                        </td>
                                        <td colspan="2" rowspan="2" style='height:240px'>
                                            <p>Are the parts sent to a different location after this process? If yes, location details:
                                            <span>{{table4.shipAddressNot}}</span></p>
                                        </td>
                                        <td colspan="3" style='height:120px'>
                                            <p>If yes, packaging description
                                            <span>{{table4.shipAddress}}</span></p>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td colspan="3" style='height:120px'>
                                            <p>Temperature at which the packaging is done:
                                            <span>{{table4.packoperateTemp}}</span></p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colspan="2" style='height:100px'>
                                            <p>Mode of transportation:
                                            <span>{{table4.carriageType}}</span></p>
                                        </td>
                                        <td colspan="2" style='height:100px' rowspan="2">
                                            <p>Title of ownership during transportation:
                                            <span>{{table4.carriagePrincipalPosition}}</span></p>
                                        </td>
                                        <td colspan="2" style='height:100px' rowspan="2">
                                            <p>Any corrosion observed during/after this process:
                                            <span>{{table4.isFindExpiration}}</span>

                                           
                                          </p>

                                        </td>
                                        <td colspan="3" style='height:100px' rowspan="2">
                                            <p>If yes, detailed description of corrosion pattern:
                                            <span>{{table4.expirationStatusContent}}
                                             <img :src="i" v-for='i in img4'></span>
                                            <img >
                                          </p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colspan="2" style='height:100px'>
                                            <p>Length of transportation:
                                            <span>{{table4.carriageTime}}</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style='height:200px'>
                                            <div class="table4two" style='height:200px'>
                                                <ul>
                                                    <li>
                                                        <p>Number of parts on which the corrosion is observed:
                                                        <span>{{table4.findExpirationNumber}}</span></p>
                                                    </li>
                                                    <li>
                                                        <p>Percentage of total parts shipped that corroded:
                                                        <span></span></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td colspan="2" style='height:200px'>
                                            <p>Do the parts appear to have residues on them?
                                            <span>{{table4.processIsResidual}}</span></p>
                                        </td>
                                        <td colspan="2" style='height:200px'>
                                            <p>If yes, nature of the residues:
                                            {{table4.residualKind}}
                                            <img :src="i" v-for='i in img5'></p>
                                        </td>
                                        <td colspan="3" style='height:200px'>
                                            <p>Other details on the process:
                                            {{table4.otherContent}}</p>
                                        </td>
                                    </tr>

                                </table>

                            </div>


                            <div class="table5" v-for='table5 in table5'>
                                <p class='tabletit'>WASHING AND DRYING PROCESS</p>
                                <table>
                                    <tr style='text-align:center'>
                                        <td style='height:100px;width:10%' >
                                            <p>Washing process:</p>
                                        </td>
                                        <td style='width:15%;'>
                                            <p>Description of washing process:</p>
                                        </td>
                                        <td style='width:15%'>
                                            <p>Washing fluid(s) components:</p>
                                        </td>
                                        <td style='width:8%'>
                                            <p>Dilution %</p>
                                        </td>
                                        <td style='width:10%'>
                                            <p>Type of water used:</p>
                                        </td>
                                        <td style='width:12%'>
                                            <p>Wash process temperature:</p>
                                        </td>
                                        <td style='width:15%'>
                                            <p>Is the water recycled back into the wash system?</p>
                                        </td>
                                        <td style='width:20%'>
                                            <p>If yes, details of water purification process:</p>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td rowspan="3"></td>
                                        <td rowspan="3" style='height:200px'>
                                           <p>{{table5.cleanAridContent}}</p> 
                                        </td>
                                        <td ><p>{{table5.cleanAgentName}}</p></td>
                                        <td><p>{{table5.concentration}}</p></td>
                                        <td><p>{{table5.cargilleType}}</p></td>
                                        <td rowspan="3">
                                       </td>
                                        <td rowspan="3"> <p>{{table5.isCirculationClean}}</p></td>
                                        <td rowspan="3">{{table5.filtrationTypeContent}}</td>
                                    </tr>
                                    <tr class='table5_tr'>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class='table5_tr'>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class='table5_tr2'>
                                        <td colspan="2">
                                            <p>Make-up water source for any fluid loss:
                                            <span>{{table5.fluidInfusionType}}</span></p>
                                        </td>
                                        <td colspan="2">
                                            <p>How often is the water added：<span>
                                                {{table5.waterFrequency}}
                                            </span></p>
                                        </td>
                                        <td colspan="2">
                                            <p>Washing cycle time:
                                            <span>{{table5.cleanoutCirculationType}}</span></p>
                                        </td>
                                        <td colspan="2">
                                            <p>Tank cleaning frequency
                                            <span>{{table5.flumeCleanFre}}</span></p>
                                        </td>
                                    </tr>
                                    <tr class='table5_tr2'>
                                        <td colspan="2">
                                            <p>Is this the final washing process or an initial washing process?
                                            <span>{{table5.isWashed}}</span></p>
                                        </td>
                                        <td colspan="2">
                                            <p>Are all part surfaces adequately washed/covered by the washe?
                                            <span>{{table5.allWorkpieceIsclean}}</span></p>
                                        </td>
                                        <td colspan="4">
                                            <p>Other details on washing process:
                                            <span>{{table5.cleanProcessContent}}</span></p>
                                        </td>
                                    </tr>
                                    <tr  style='text-align:center'>
                                        <td>
                                         <p>Drying process</p> 
                                     </td>
                                     <td colspan="2">
                                        <p>Description of drying process</p>
                                    </td>
                                    <td colspan="2">
                                        <p> Is air used in the drying process?</p>
                                    </td>
                                    <td>
                                        <p>If yes, is it compressed?</p>
                                    </td>
                                    <td>
                                        <p>Is it filtered?</p>
                                    </td>
                                    <td>
                                        <p>Size of the filter used?</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style='height:200px'>
                                       
                                    </td>
                                    <td colspan="2">
                                       <p>{{table5.aridProcessContent}}</p>
                                    </td>
                                    <td colspan="2">
                                        <p>{{table5.aridProcessIsair}}</p>
                                    </td>
                                    <td>
                                        <p>{{table5.isCompressAir}}</p>
                                    </td>
                                    <td>
                                        <p>{{table5.compressAirIsfiltration}}</p>
                                    </td>
                                    <td>
                                        <p>{{table5.filtrationPrecision}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3" style='height:250px'>
                                        <p style='height:100%;padding:10px'>If the drying process is oven-based, what is the temperature at which the parts are dried?<span>
                                            {{table5.bakeTemp}}
                                        </span></p>
                                    </td>
                                    <td colspan="5">
                                       <p style='height:100%;padding:10px'>Other description of drying process:
                                       <span>{{table5.otherContent}}</span>
                                     

                                     </p>
                                   </td>
                               </tr>
                           </table>
                       </div>


                       <div class="table6" v-for='table6 in table6'>
                        <p class='tabletit'>PACKAGING DETAILS</p>
                        <table>
                            <tr style='text-align:center'>
                                <td style='width:30%;height:100px'>
                                    Detailed primary packaging description: (e.g. film, bags, sheeting, cardboard boxes, returnable dunnage, etc.)
                                </td>
                                <td style='width:25%'>
                                    Secondary packaging description: (e.g. wooden crate, cardboard box, returnable dunnage, etc.)
                                </td>
                                <td style='width:15%'>
                                    Type of pallet used and any metal towood contact observed?
                                </td>
                                <td>
                                    Temperature at which the parts are packaged:
                                </td>
                            </tr>
                            <tr style='height:200px'>
                                <td >
                                    <p>{{table6.primaryPackType}}</p>
                                </td>
                                <td>
                                    <p>{{table6.minorPackType}}</p>
                                </td>
                                <td><p>{{table6.trayType}}<span>{{table6.metalIsClub}}</span></p></td>
                                <td>
                                    <p>{{table6.packTemp}}</p>
                                </td>
                            </tr>
                            <tr class='table6tr'>
                                <td style='height:180px'>
                                    <p>Any condensation noticed on the part before/during and after packaging?
                                    <span>{{table6.packBeforeIsWater}}</span>
                                    <span>{{table6.packUseIsWater}}</span>
                                    <span>{{table6.packAfterIsWater}}</span></p>
                                </td>
                                <td>
                                    <p>Are the parts dry at this stage?
                                    <span>{{table6.receivedIsArid}}</span></p>
                                </td>
                                <td>
                                    <p>Are there any visible signs of residues on the part?
                                    <span>{{table6.receivedIsKind}}</span></p>
                                </td>
                                <td>
                                    <p>Any visible corrosion on the parts before packaging?
                                    <span>{{table6.packIsKind}}</span></p>
                                </td>
                            </tr>
                            <tr class='tabletr2'>
                                <td>
                                    <p>Description of storage area:
                                    <span>{{table6.storeEntrepotContent}}</span></p>
                                </td>
                                <td colspan="2">
                                    <p>Is the storage area clean and free of moisture, water, dirt and other contaminant?
                                    <span>{{table6.storeEntrepotStatus}}</span></p>
                                </td>
                                <td>
                                    <p>How long are the parts stored before transportation?
                                    {{table6.storeTime}}h</p>
                                </td>
                            </tr>
                            <tr class='tabletr2'>
                                <td>
                                    <p>
                                        Distance between the manufacturing location and storage area?
                                        <span>{{table6.productWarehouseDistance}}</span>
                                    </p>
                                </td>
                                <td colspan="2">
                                    <p>Mode of transportation from manufacturing location to the storage area?
                                    <span>{{table6.carriageType}}</span></p>
                                </td>
                                <td>
                                    <p>Any corrosion observed during the storage?
                                    <span>{{table6.storeIsExpiration}}</span></p>
                                </td> 
                            </tr>
                            <tr class='tabletr2'>
                                <td>
                                    <p>If yes, is there a pattern of rust?
                                    <span>{{table6.isRust}}</span>
                                    <img :src="i" v-for='i in img'></p>
                                </td>
                                <td colspan="3">
                                    <p>Other packaging or storage related details?
                                    <span>{{table6.otherContent}}</span></p>
                                </td>
                            </tr>
                        </table>
                       </div>


                    <div class="table7" v-for='table7 in table7'>
                        <p class='tabletit'>TRANSPORTATION DETAILS</p>
                        <table>
                            <tr style='text-align:center'>
                                <td style='width:15%;height:80px'>
                                    <p>Mode of transportation:
                                    <span>{{table7.carriageType}}</span></p>
                                </td>
                                <td style='width:35%'>
                                    <p>Point of origin and destination:
                                    <span>{{table7.carriageStart}}</span>
                                    <span>{{table7.carriageEnd}}</span></p>
                                </td>
                                <td style='width:10%'>
                                    <p>Time in transportation:
                                    <span>{{table7.carriageTime}}</span></p>
                                </td>
                                <td style='width:40%' colspan="2">
                                    <p>Truck/vehicle details: (for example, type of truck, temperature controlled, etc.)
                                    <span>{{table7.carriageTool}}</span></p>
                                </td>

                            </tr>
                            <tr class='table7tr'>
                                <td  rowspan="2">
                                    <p>Title of ownership during transportation:
                                    <span>{{table7.carriagePrincipalTitle}}</span></p>
                                </td>
                                <td colspan="2" style='height:100px'>
                                    <p>Interim storage details (before next transportation phase):
                                    <span>{{table7.transitWarehouseContent}}</span></p>
                                </td>
                                <td style='width:15%' rowspan="2">
                                    <p>Are the parts inspected at this stage?
                                    <span>{{table7.isAgainPack}}</span></p>
                                </td>
                                <td style='width:25%' rowspan="2">
                                    <p>Any leaks/ tears in packaging observed at this stage? If yes, describe:
                                    <span>{{table7.isBlab}}</span>
                                    <img :src="i" v-for='i in img6'></p>
                                </td>
                            </tr>
                            <tr class='table7tr'>
                             <td style='height:100px' colspan="2">
                                 <p>Are the parts deconsolidated and repacked? If yes, describe the packaging
                                 <span>{{table7.isAgainPack}}</span>
                                 <img :src="i" v-for='i in img7'></p>
                             </td> 
                         </tr>
                         <tr  class='table7tr2'>
                            <td class=''>
                                <p>Any corrosion observed at this stage?
                                <span>{{table7.isKind}}</span></p>
                            </td>
                            <td colspan="2">
                                <p>If yes, please describe the pattern of corrosion:
                                {{table7.kindContent}}
                                <img :src="i" v-for='i in img6'></p>
                            </td>
                            <td colspan="2">
                                <p>Other comments:
                                {{table7.otherContent}}</p>
                            </td>
                        </tr>
                        <tr style='height:120px;text-align:center'>
                            <td>
                                <p>Mode of transportation: </p>
                            </td>
                            <td >
                                <p> Point of origin and destination:Time </p>
                            </td>
                            <td>
                                <p>Time in transportation:</p>
                            </td>
                            <td colspan="2">
                                <p>Truck/vehicle details: (for example, type of truck, temperature controlled, etc.)</p>
                            </td>
                        </tr>
                        <tr style='height:180px;'>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colspan="2"></td>
                        </tr>
                        <tr class='table7tr3'>
                            <td rowspan="2">
                                <p>Title of ownership during transportation:</p>
                            </td>
                            <td colspan="2">
                                <p>Interim storage details (before next transportation phase):</p>
                            </td>
                            <td rowspan="2">
                                <p>Are the parts inspected at this stage?</p>
                            </td>
                            <td rowspan="2" colspan="2">
                                <p>Any leaks/ tears in packaging observed at this stage? If yes, describe:</p>
                            </td>
                        </tr>
                        <tr class='table7tr3'>
                            <td colspan="2">
                                <p>Are the parts deconsolidated and repacked? If yes, describe the packaging:</p>
                            </td>
                        </tr>
                        <tr class='table7tr4'>
                            <td>
                                <p>
                                    Any corrosion observed at this stage？
                                </p>
                            </td>
                            <td colspan="2">
                                <p>If yes, please describe the pattern of corrosion:
                                </p>

                            </td>
                            <td colspan="2">
                                <p>Other comments</p>
                            </td>
                        </tr>

                    </table>

                </div>


                <div class="table8" v-for='table8 in table8'>
                    <p class='tabletit'>
                        END USER DETAILS
                    </p>
                    <table>
                        <tr style='height:80px;text-align:center'>
                            <td style='width:30%'>
                                <p>Mode of transportation</p>
                            </td>
                            <td style='width:40%' colspan="2">
                                <p>Condition of the packaging upon arrival</p>
                            </td>
                            <td style='width:30%'>
                                <p>Condition of the parts upon arrival</p>
                            </td>
                        </tr>
                        <tr style='height:150px'>
                            <td>
                                <p>{{table8.terminalClientContent}}</p>
                            </td>
                            <td colspan="2">
                                <p>{{table8.aogPackStatus}}</p>
                            </td>
                            <td>
                                <p>{{table8.aogWorkpieceStatus}}</p>
                            </td>
                        </tr>
                        <tr class='tbale8tr'>
                            <td rowspan="2" style='height:240px'>
                                <p>Any condensation observed on or inside the packaging?
                                <span>{{table8.packOutIsWater}}</span>
                                <span>{{table8.packInIsWater}}</span></p>
                            </td>
                            <td colspan="2" style='height:120px'>
                                <p>How long are the parts stored before use in warehouse?
                                <span>{{table8.entrepotStoreTime}}</span></p>
                            </td>
                            <td rowspan="2" style='height:240px'>
                                <p>Are the parts deconsolidated and repacked? If yes, describe the packaging:
                                <span>{{table8.isAgainPack}}</span>
                                <span>{{table8.packContent}}</span>
                                <img :src="i" v-for='i in img8'></p>
                            </td>
                        </tr>
                        <tr class='tbale8tr'>
                            <td style='height:120px' colspan="2">
                                <p>Warehouse conditions
                                <span>{{table8.entrepotContent}}</span></p>
                            </td>
                        </tr>
                        <tr class='tbale8tr'>
                            <td style='height:240px'>
                                <p>
                                    Any corrosion seen during deconsolidation? If yes, describe the pattern?
                                    <span>{{table8.isKind}}</span>
                                    <span>{{table8.kindContent}}</span>
                                </p>
                            </td>
                            <td colspan="2" style='height:240px'>
                                <p>Are all the products used at once or over a period of time?
                                <span>{{table8.useStatus}}</span></p>
                            </td>
                            <td style='height:240px'>
                                <p>If the parts are stored long-term, are they sprayed with any kind of Rust Preventive (RP)?
                                <span>{{table8.isSlushingOil}}</span></p>
                            </td>
                        </tr>
                        <tr class='tbale8tr' >
                            <td style='height:150px'>
                                <p>Are all parts used at once or over a period of time?
                                <span>{{table8.useStatus}}</span></p>
                            </td>
                            <td style='width:20%;height:150px'>
                                <p>If used at different times, what is the use frequency?
                                <span>{{table8.useFrequency}}</span></p>
                            </td>
                            <td style='width:20%;height:150px'>
                                <p>Interim storage conditions?
                                <span>{{table8.temporaryStorage}}</span></p>
                            </td>
                            <td style='height:150px'> 
                                <p>Any corrosion observed during storag
                                <span>{{table8.storageIsKind}}</span></p>
                            </td>
                        </tr>
                        <tr class='tbale8tr' >
                            <td style='height:200px'>
                                <p>If corrosion occurred during storage, how long were parts stored and how many parts (percentage of total) rusted?
                                <span>{{table8.storageTime}}</span>
                                <span>{{table8.kindsNumber}}</span>
                                <img :src="i" v-for='i in img9'></p>
                            </td>
                            <td colspan="2" style='height:200px'>
                                <p>Pattern of rust
                                <span>{{table8.kindsContent}}</span></p>
                            </td>
                            <td style='height:200px'>
                                <p>Any other end use information
                                <span>{{table8.otherContent}}</span></p>
                            </td>
                        </tr>
                    </table>
                </div>
              
            </div>
             <img src="luan">
        </div>
    </template>
    <script type="text/javascript">
       import '../css/table.css'
       import luan from '../assets/1.jpg'
       export default{
        name:'pdf',
        data(){
         return{
            table1:[],
            table2:[],
            table3:[],
            table4:[],
            table5:[],
            table6:[],
            table7:[],
            table8:[],
            projectId:'',
            serviceId:'',
            receivedId:'',
            processId:'',
            cleanId:'',
            packId:'',
            carriageId:'',
            clientId:'',
            img:'',
            img1:[],
            img2:[],
            img3:[],
            img4:[],
            img5:[],
            img6:[],
            img7:[],
            img8:[],
            img9:[],
         }
     },
     methods:{

     },
     created:function(){
     //获取参数
  function UrlSearch(){
   var name,value; 
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?") 
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   for(var i=0;i < arr.length;i++){ 
    num=arr[i].indexOf("="); 
    if(num>0){ 
     name=arr[i].substring(0,num);
     value=arr[i].substr(num+1);
     this[name]=value;
     } 
    } 
} 
  let url = new UrlSearch();
  // console.log(url.id)
  //进行赋值
this.projectId=url.projectId;
this.serviceId=url.serviceId;
this.receivedId=url.receivedId;
this.processId=url.processId;
this.cleanId=url.cleanId;
this.packId=url.packId;
this.carriageId=url.carriageId;
this.clientId=url.clientId;

//对图片URL进行判断并分离成数组；
function Imgarray(imgUrl,imgNum){
  this.imgUrl = imgUrl;
  this.imgNum=imgNum;
  this.check=function(){
    if(imgUrl==''){
      return false
    }else if(imgUrl==null){
      return false
    }else{
      this.imgNum=this.imgUrl.split(',');
              for(let i= 0;i<this.imgNum.length;i++){
              this.imgNum[i]="http://210.16.188.194:8090"+this.imgNum[i];
              }
              return this.imgNum
    }
  }
}


    // alert(GetQueryString('useid'))
      this.a=1
        // 获取背景资料 table1
        this.$axios.get('api/beimei/interface/v1.0/projects/selectProject',{
            params:{
                "projectId":1,
            }
        })
        .then(data=>{
         
          if(data.data.rows!=null){
            this.table1.push(data.data.rows);
          }
            //console.log(data.data.rows);
            
        })
        .catch(error=>{
            console.log(error)
        });
        //获取客户信息接口
        this.$axios.get('api/beimei/v1.0/proService/findListService',{
                params:{
                    serviceId:1
                }
        })
        .then(data=>{
            for(let i=0;i<data.data.rows.list.length;i++){
            if(data.data.rows.list[i].procurementRight==0){
                data.data.rows.list[i].procurementRight='无'
            }else{
                data.data.rows.list[i].procurementRight='有'
            };
            if(data.data.rows.list[i].procurementSway==0){
                data.data.rows.list[i].procurementSway='无'
            }else{
                data.data.rows.list[i].procurementSway='有'
            };

        }
        if(data.data.rows!=null){
          this.table2.push(data.data.rows);
        }
        })
        .catch(error=>{
            console.log(error)
        })
        //获取来件信息接口
        this.$axios.get('api/beimei/interface/v1.0/received/selectReceived',{
            params:{
                receivedId:1, 
            }
        })
        .then(data=>{
          if(data.data.rows!=null){
            this.table3.push(data.data.rows);
            this.img2=new Imgarray(this.table3[0].packUrl,this.img2).check();
            this.img3=new Imgarray(this.table3[0].expirationIsUrl,this.img3).check();
           
              
          }
        })
        .catch(error=>{
            console.log(error)
        })
        //获取加工清洗接口
        this.$axios.get('api/beimei/interface/v1.0/zProcess/selectProcess',{
            params:{
                processId:1    
            }
        })
        .then(data=>{
             if(data.data.rows!=null){
            this.table4.push(data.data.rows);
            //console.log(this.table4.packUrl);
            //console.log(this.table4.statusContentUrl);
            //console.log(this.table4.residualUrl);
          this.img4=new Imgarray(this.table4[0].statusContentUrl,this.img4).check();
          this.img5=new Imgarray(this.table4[0].residualUrl,this.img5).check();
          console.log(this.img4)
          }
        })
        .catch(error=>{
            console.log(error)
        })
        //洗涤和干燥接口
        this.$axios.get('api/beimei/interface/v1.0/cleanArid/selectCleanArid',{
            params:{
                cleanId:1
            }
        })
        .then(data=>{
          // console.log(data.data.rows);
          // if(data){
          //   this.table5.push(data.data.rows);
          // }
    //console.log(data);
    if(data.data.rows!=null){
        this.table5.push(data.data.rows);
    }
        })
        .catch(error=>{
            console.log(error)
        })
        //包装细节接口
        this.$axios.get('api/beimei/interface/v1.0/pack/selectPack',{
            params:{
                packId:97
            }
        })
        .then(data=>{
             if(data.data.rows!=null){
            this.table6.push(data.data.rows);
            this.img= new Imgarray(this.table6[0].rustContentUrl,this.img).check();
          };
        })
        .catch(error=>{
            console.log(error)
        })
        //运输模块接口
        this.$axios.get('api/beimei/interface/v1.0/carriage/selectCarriage',{
            params:{
                carriageId:1
            }
        })
        .then(data=>{
            //console.log(data);
             if(data.data.rows!=null){
              //console.log(data.data.rows)
            this.table7.push(data.data.rows);
           this.img6=new Imgarray(this.table7[0].packTearUrl,this.img6).check();
           this.img7=new Imgarray(this.table7[0].packContentUrl,this.img7).check();
          };
        })
        .catch(error=>{
            console.log(error);
        })
        //终端接口
        this.$axios.get('api/beimei/interface/v1.0/termClient/selectTerminalClient',{
            params:{
                clientId:6
            }
        })
        .then(data=>{
           
             if(data.data.rows!=null){

            this.table8.push(data.data.rows);
           this.img8=new Imgarray(this.table8[0].packContentUrl,this.img8).check();
           this.img9=new Imgarray(this.table8[0].kindContentUrl,this.img9).check();

          };
            //console.log(this.table8)
        })
        .catch(error=>{
            console.log(this.error)
        })
    }


}
</script>
<style type="text/css" scoped>
img{
  max-width:200px;
}
</style>