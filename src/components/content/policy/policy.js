import React from 'react';
import './policy.css'
import PolicyImage from '../../../assets/policy.png';
import BackgroundImage2 from '../../../assets/header_2.png';

function Policy() {
  return (
    <>
      <section
        className="no-background__mobile page-section page-section--col-primary page-section--col-dark nomove fullwidth videobghost "
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundImage: `url(${BackgroundImage2})`
        }}>
        <div className="parsys sectionpar">
          <div className="herotitle section">
            <div className="dpe-component-wrapper hero-title-component hero-title-component--lg-h1">
              <div className="hero-title hero-title-textpanel--compaign">
                <div className="container">
                  <div className="row hero-title-row--compaign">
                    <div className="textColumn col-sm-8">
                      <div className="hero-title-textpanel">
                        <h1><a href={'/report_allegation'} className="compaign-hlight__inner">Report an allegation</a></h1>
                        {/*<p className="sub-heading"><span className="compaign-hlight__inner">Your electronic Whistleblowing platform</span></p>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={'policy'}>
        <div className="dpe-component-wrapper secnav-tabs  secnav-tabs--with-icons  secnav-tabs--with-heading ">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <img src={PolicyImage} alt={'Policy'}/>
                <p>A whistleblower as defined by this policy is an employee of (Name of Company/Organization) who
                  reports an
                  activity that he/she considers to be illegal or dishonest to one or more of the parties specified in
                  this
                  Policy. The whistleblower is not responsible for investigating the activity or for determining fault
                  or
                  corrective measures; appropriate management officials are charged with these responsibilities.
                </p>
                <p>Examples of illegal or dishonest activities are violations of federal, state or local laws; billing
                  for
                  services not performed or for goods not delivered; and other fraudulent financial reporting.
                </p>
                <p>If an employee has knowledge of or a concern of illegal or dishonest fraudulent activity, the
                  employee is to
                  contact his/her immediate supervisor or the Human Resources Director. The employee must exercise sound
                  judgment
                  to avoid baseless allegations. An employee who intentionally files a false report of wrongdoing will
                  be subject
                  to discipline up to and including termination.
                </p>
                <p>Whistleblower protections are provided in two important areas -- confidentiality and against
                  retaliation.
                  Insofar as possible, the confidentiality of the whistleblower will be maintained. However, identity
                  may have to
                  be disclosed to conduct a thorough investigation, to comply with the law and to provide accused
                  individuals
                  their legal rights of defense. The Company will not retaliate against a whistleblower. This includes,
                  but is not
                  limited to, protection from retaliation in the form of an adverse employment action such as
                  termination,
                  compensation decreases, or poor work assignments and threats of physical harm. Any whistleblower who
                  believes
                  he/she is being retaliated against must contact the Human Resources Director immediately. The right of
                  a
                  whistleblower for protection against retaliation does not include immunity for any personal wrongdoing
                  that is
                  alleged and investigated.
                </p>
                <p>Defend Trade Secrets Act (DTSA) Compliance: "Immunity from Liability for Confidential Disclosure of a
                  Trade
                  Secret to the Government or in a Court Filing:
                </p>
                <ol>
                  <li> Immunity—An individual shall not be held criminally or civilly liable under any federal or state
                    trade
                    secret law for the disclosure of a trade secret that—(A) is made—(i) in confidence to a federal,
                    state or
                    local government official, either directly or indirectly, or to an attorney; and (ii) solely for the
                    purpose
                    of reporting or investigating a suspected violation of law; or (B) is made in a complaint or other
                    document
                    filed in a lawsuit or other proceeding, if such filing is made under seal.
                  </li>
                  <li> Use of Trade Secret Information in Anti-Retaliation Lawsuit—An individual who files a lawsuit for
                    retaliation by an employer for reporting a suspected violation of law may disclose the trade secret
                    to the
                    attorney of the individual and use the trade secret information in the court proceeding, if the
                    individual—(A)
                    files any document containing the trade secret under seal; and (B) does not disclose the trade
                    secret, except
                    pursuant to court order."
                  </li>
                </ol>
                <p>All reports of illegal and dishonest activities will be promptly submitted to the Vice President of
                  Human
                  Resources who is responsible for investigating and coordinating corrective action.
                </p>
                <p>Employees with any questions regarding this policy should contact the Director of Human
                  Resources.</p>
                {/*<Quotes/>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Policy;
