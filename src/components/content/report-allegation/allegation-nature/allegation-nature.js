import React from 'react';
import {Form, Input, Popover, Select, Tooltip} from "antd";
import {QuestionCircleOutlined} from '@ant-design/icons';
import fraudulentAllegations, {enums as fraudulentAllegationsEnum} from '../../../../enums/FraudulentAllegation';
import misconductAllegations from '../../../../enums/MisconductAllegation';
import jobTitles from '../../../../enums/JobTitle';
import departments, {enums as departmentEnums} from '../../../../enums/Department';
import awareReason from '../../../../enums/AwareReason';
import certainties from '../../../../enums/Certainty';
import severities from '../../../../enums/Severity';
import impacts from '../../../../enums/Impact';
import healthSafeties from '../../../../enums/HealthSafety';
import assetMisappropriation, {enums as assetMisappropriationsEnum} from '../../../../enums/AssetMisappropriation';
import briberies, {enums as briberiesEnum} from '../../../../enums/Bribery';
import bankruptcyFrauds, {enums as bankruptcyFraudEnums} from '../../../../enums/BankruptcyFraud';
import checkAndCreditFrauds, {enums as checkAndCreditFraudEnums} from '../../../../enums/CheckAndCreditFraud';
import computerInternetFrauds, {enums as computerInternetFraudEnums} from '../../../../enums/ComputerInternetFraud';
import contractProcurementFrauds, {enums as contractProcurementFraudEnums} from '../../../../enums/ContractProcurementFraud';
import financialInstitutionFrauds, {enums as financialInstitutionFraudEnums} from '../../../../enums/FinancialInstitutionFraud';
import helthcareFrauds, {enums as healthcareFraudEnums} from '../../../../enums/HealthcareFraud';
import hrFrauds, {enums as hrFraudEnums} from '../../../../enums/HRFraud';
import insuranceFrauds, {enums as insuranceFraudEnums} from '../../../../enums/InsuranceFraud';
import intellectualPropertyFrauds, {enums as intellectualPropertyFraudEnums} from '../../../../enums/IntellectualProperty';
import paymentFrauds, {enums as paymentFraudEnums} from '../../../../enums/PaymentFraud';
import publicSectorFrauds, {enums as publicSectorFraudEnums} from '../../../../enums/PublicSectorFraud';
import securityFrauds, {enums as securityFraudEnums} from '../../../../enums/SecurityFraud';
import taxFrauds, {enums as taxFraudEnums} from '../../../../enums/TaxFraud';

function AllegationNature(props) {

  const [fraudulentAllegation, setFraudulentAllegation] = React.useState('');
  const [otherAssetMisappropriation, setOtherAssetMisappropriation] = React.useState('');
  const [otherBribery, setOtherBribery] = React.useState('');
  const [otherBankruptcyFraud, setOtherBankruptcyFraud] = React.useState('');
  const [otherCheckAndCreditFraud, setOtherCheckAndCreditFraud] = React.useState('');
  const [otherComputerInternetFraud, setOtherComputerInternetFraud] = React.useState('');
  const [otherConntractProcurementFraud, setOtherConntractProcurementFraud] = React.useState('');
  const [otherFinancialInstitutionFraud, setOtherFinancialInstitutionFraud] = React.useState('');
  const [otherHelthcareFraud, setOtherHelthcareFraud] = React.useState('');
  const [otherHrFraud, setOtherHrFraud] = React.useState('');
  const [otherInsuranceFraud, setOtherInsuranceFraud] = React.useState('');
  const [otherIntellectualPropertyFraud, setOtherIntellectualPropertyFraud] = React.useState('');
  const [otherPaymentFraud, setOtherPaymentFraud] = React.useState('');
  const [otherPublicSectorFraud, setOtherPublicSectorFraud] = React.useState('');
  const [otherSecurityFraud, setOtherSecurityFraud] = React.useState('');
  const [otherTaxFraud, setOtherTaxFraud] = React.useState('');
  const [otherDepartment, setOtherDepartment] = React.useState([]);

  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
    },
    wrapperCol: {
      xs: {span: 24},
    },
  };

  let content = [];
  if (props.show) {
    if (props.show.showAllegationNature1) {
      content = [
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="fraudulentAllegationNature"
          name="fraudulentAllegationNature"
          label={'What is the category of the fraudulent allegation'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select onChange={e => setFraudulentAllegation(e)}>
            {fraudulentAllegations.map(item => <Select.Option key={item.key}
                                                              value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
      ];

      switch (parseInt(fraudulentAllegation)) {
        case fraudulentAllegationsEnum.ASSET_MISAPROPRIATION:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="assetMisappropriation"
              name="assetMisappropriation"
              label={
                <span>Asset misappropriation &nbsp;
                  <Tooltip
                    title="Asset Misappropriation: Schemes in which perpetrators steal or misuse an organization’s resources.">
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={(e) => setOtherAssetMisappropriation(e)}>
                {assetMisappropriation.map(item => <Select.Option key={item.key}
                                                                  value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];
          if (parseInt(otherAssetMisappropriation) === assetMisappropriationsEnum.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherAssetMisappropriation"
                key="otherAssetMisappropriation"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.BRIBERY:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="bribery"
              name="bribery"
              label={
                <span>Bribery &nbsp;
                  <Tooltip
                    title="The act of giving money, goods or other forms of recompense to a recipient in exchange for an alteration of their behavior (to the benefit/interest of the giver) that the recipient would otherwise not alter.">
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherBribery(e)}>
                {briberies.map(item => <Select.Option key={item.key}
                                                      value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherBribery) === briberiesEnum.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherBribery"
                key="otherBribery"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.BANKRUPTCY_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="bankruptcyFraud"
              name="bankruptcyFraud"
              label={
                <span>Bankruptcy Fraud &nbsp;
                  <Tooltip
                    title="Schemes in which perpetrators conceal assets or falsify the documents to avoid paying back the creditors.">
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherBankruptcyFraud(e)}>
                {bankruptcyFrauds.map(item => <Select.Option key={item.key}
                                                             value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherBankruptcyFraud) === bankruptcyFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherBankruptcyFraud"
                key="otherBankruptcyFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.CHECK_CREDIT_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="checkCreditCardFraud"
              name="checkCreditCardFraud"
              label={
                <span>Check & credit card fraud &nbsp;
                  <Tooltip
                    title="The use of technology to design/reproduce bank checks and simple check forgery. The unauthorized use of an individual’s credit card or card information to make purchases, or to remove funds from the cardholder’s account.">
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherCheckAndCreditFraud(e)}>
                {checkAndCreditFrauds.map(item => <Select.Option key={item.key}
                                                                 value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherCheckAndCreditFraud) === checkAndCreditFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherCheckCreditCardFraud"
                key="otherCheckCreditCardFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.COMPUTER_INTERNET_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="computerInternetFraud"
              name="computerInternetFraud"
              label={
                <span>Computer and internet fraud &nbsp;
                  <Popover content={(
                    <>For description of each fraud please click <a href='IT_d.html' target='_blank'><u>here</u></a></>
                  )} trigger="hover">
                    <QuestionCircleOutlined/>
                  </Popover>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherComputerInternetFraud(e)}>
                {computerInternetFrauds.map(item => <Select.Option key={item.key}
                                                                   value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherComputerInternetFraud) === computerInternetFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherComputerInternetFraud"
                key="otherComputerInternetFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.CONTRACT_PROCUREMENT_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="contractProcurementFraud"
              name="contractProcurementFraud"
              label={
                <span>Contract and procurement fraud &nbsp;
                  <Tooltip
                    title={`Contract & Procurement Fraud: Any deceptive behavior associated with procurement activities conducted by an employee or external party to gain personal interest (i.e. price fixing and bid rigging, defective pricing, corruption and bribery/kickbacks, defective parts, cost/labor mischarging, conflicts of interest or product substitution). <br>Anti Competitive Behaviour: Anti-competitieve practices are  business or government practices that prevent or reduce copetition in the market.<br>Insider Information: or "Insider Trading" is the trading of a public company's stock or other securities (such as bonds or stock options) by individuals with access to nonpublic information about the company.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherConntractProcurementFraud(e)}>
                {contractProcurementFrauds.map(item => <Select.Option key={item.key}
                                                                 value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherConntractProcurementFraud) === contractProcurementFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherContractProcurementFraud"
                key="otherContractProcurementFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.FINANCIAL_INSTITUTION_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="financialInstitutionFraud"
              name="financialInstitutionFraud"
              label={
                <span>Financial Institution fraud &nbsp;
                  <Tooltip
                    title={`Financial Institution fraud:The act of using illegal means to obtain money or other assets held by a financial institution.<br> Emblezzlement scheme: The fraudulent conversion of another's property by a person who is in a position of trust, such as an agent or employee.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherFinancialInstitutionFraud(e)}>
                {financialInstitutionFrauds.map(item => <Select.Option key={item.key}
                                                                      value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherFinancialInstitutionFraud) === financialInstitutionFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherFinancialInstitutionFraud"
                key="otherFinancialInstitutionFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.HEALTHCARE_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="healthcareFraud"
              name="healthcareFraud"
              label={
                <span>Healthcare fraud &nbsp;
                  <Tooltip
                    title={`Healthcare Fraud: a scheme in which the perpetrator defrauds a healthcare insurance or benefit program to obtain any benefit or payment from the program.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherHelthcareFraud(e)}>
                {helthcareFrauds.map(item => <Select.Option key={item.key}
                                                                       value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherHelthcareFraud) === healthcareFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherHealthcareFraud"
                key="otherHealthcareFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.HR_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="hrFraud"
              name="hrFraud"
              label={
                <span>HR fraud &nbsp;
                  <Tooltip
                    title={`Schemes in which perpetrators steal or misuse an organization’s resources.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherHrFraud(e)}>
                {hrFrauds.map(item => <Select.Option key={item.key}
                                                            value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherHrFraud) === hrFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherHrFraud"
                key="otherHrFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.INTELLECTUAL_PROPERTY:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="intellectualProperty"
              name="intellectualProperty"
              label={
                <span>Intellectual property &nbsp;
                  <Tooltip
                    title={`Intellectual property: Intangible rights protecting the products of human intelligence and creation, such as copyrightable works, patented inventions, Trademarks, and trade secrets.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherIntellectualPropertyFraud(e)}>
                {intellectualPropertyFrauds.map(item => <Select.Option key={item.key}
                                                     value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherIntellectualPropertyFraud) === intellectualPropertyFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherIntellectualPropertyFraud"
                key="otherIntellectualPropertyFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.INSURANCE_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="insuranceFraud"
              name="insuranceFraud"
              label={
                <span>Insurance Fraud &nbsp;
                  <Tooltip
                    title={`Insurance Fruad: The wrongful or criminal deception of an insurance company for the purpose of wrongfully receiving compensation or benefits. <br> Kickbacks: The seller's return of part of the purchase price of an item to a buyer or buyer's representative for the purpose of inducing a purchase or improperly influencing future purchases.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherInsuranceFraud(e)}>
                {insuranceFrauds.map(item => <Select.Option key={item.key}
                                                                       value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherInsuranceFraud) === insuranceFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherInsuranceFraud"
                key="otherInsuranceFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.TAX_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="taxFraud"
              name="taxFraud"
              label={
                <span>Tax Fraud &nbsp;
                  <Tooltip
                    title={`Tax Fraud: The non-payment of taxes by means of not reporting all taxable income, or by taking un-allowed deductions.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherTaxFraud(e)}>
                {taxFrauds.map(item => <Select.Option key={item.key}
                                                            value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherTaxFraud) === taxFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherTaxFraud"
                key="otherTaxFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.SECURITY_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="securityFraud"
              name="securityFraud"
              label={
                <span>Security Fraud &nbsp;
                  <Tooltip
                    title={`Security Fraud: Deceptive practice in the stock or commodities markets that induces investors to make purchase or sale decisions on the basis of false information, frequently resulting in losses.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherSecurityFraud(e)}>
                {securityFrauds.map(item => <Select.Option key={item.key}
                                                      value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherSecurityFraud) === securityFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherSecurityFraud"
                key="otherSecurityFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.PAYMENT_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="paymentFraud"
              name="paymentFraud"
              label={
                <span>Payment Fraud to generate false payments &nbsp;
                  <Tooltip
                    title={`Involves falsely creating or diverting payments. Creating bogus customer records and bank accounts so that false payments can be generated.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherPaymentFraud(e)}>
                {paymentFrauds.map(item => <Select.Option key={item.key}
                                                           value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherPaymentFraud) === paymentFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherPaymentFraud"
                key="otherPaymentFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        case fraudulentAllegationsEnum.PUBLIC_SECTOR_FRAUD:
          content = [
            ...content,
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="publicSectorFraud"
              name="publicSectorFraud"
              label={
                <span>Public Sector Fraud &nbsp;
                  <Tooltip
                    title={`Public Sector Fraud: Intentional misuse of public funds or resources.`}>
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
              }
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select onChange={e => setOtherPublicSectorFraud(e)}>
                {publicSectorFrauds.map(item => <Select.Option key={item.key}
                                                          value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ];

          if (parseInt(otherPublicSectorFraud) === publicSectorFraudEnums.OTHER) {
            content = [
              ...content,
              <Form.Item
                {...formItemLayout}
                labelAlign={"left"}
                name="otherPublicSectorFraud"
                key="otherPublicSectorFraud"
                label={'Other'}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            ]
          }
          break;
        default:
          break;
      }
    } else {
      if (props.show.showAllegationNature2) {
        content = [
          <Form.Item
            {...formItemLayout}
            labelAlign={"left"}
            key="misconductAllegationNature"
            name="misconductAllegationNature"
            label={
              <span>What is the category of the misconduct allegation &nbsp;
                <Tooltip
                  title="Insubordination: is the act of willfully disobeying one's superior. Refusing to perform an action that is unethical or illegal is not insubordination; neither is refusing to perform an action that is not within the scope of authority of the person issuing the order">
                    <QuestionCircleOutlined/>
                  </Tooltip>
                </span>
            }
            hasFeedback
            rules={[
              {
                required: true,
                message: 'This field is required',
              },
            ]}
          >
            <Select>
              {misconductAllegations.map(item => <Select.Option key={item.key}
                                                                value={item.key}>{item.value}</Select.Option>)}
            </Select>
          </Form.Item>
        ]
      } else {
        if (props.show.showAllegationNature3) {
          content = [
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="healthSafety"
              name="healthSafety"
              label={'Health & Safety'}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select>
                {healthSafeties.map(item => <Select.Option key={item.key}
                                                           value={item.key}>{item.value}</Select.Option>)}
              </Select>
            </Form.Item>
          ]
        }
      }
    }
    if ((props.show.showAllegationNature1 && fraudulentAllegation) || props.show.showAllegationNature2 || props.show.showAllegationNature3) {
      content = [
        ...content,
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="allegationDescription"
          name="allegationDescription"
          label={'In your own words, please describe the allegation'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Input.TextArea/>
        </Form.Item>,
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="departments"
          name="departments"
          label={'The department(s) involved is(are)'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select mode={"multiple"} onChange={e => setOtherDepartment(e)}>
            {departments.map(item => <Select.Option key={item.key}
                                                    value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>,
        <>
          {otherDepartment.includes(departmentEnums.OTHER) ? (
            <Form.Item
              {...formItemLayout}
              labelAlign={"left"}
              key="otherDepartment"
              name="otherDepartment"
              label={'Other'}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Input/>
            </Form.Item>
          ) : null}
          </>,
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="jobTitle"
          name="jobTitle"
          label={'The person involved is(are)'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select mode={"multiple"}>
            {jobTitles.map(item => <Select.Option key={item.key}
                                                  value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>,
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="employeeName"
          name="employeeName"
          label={'The name(s) is (are)'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Input.TextArea/>
        </Form.Item>,
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="awareReason"
          name="awareReason"
          label={'How you became aware of the misconduct'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select>
            {awareReason.map(item => <Select.Option key={item.key}
                                                    value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>,
        /*<Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="certainty"
          name="certainty"
          label={'I would classify the certainty of the misconduct act'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select>
            {certainties.map(item => <Select.Option key={item.key}
                                                    value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>,*/
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="severity"
          name="severity"
          label={'How severe is the allegation'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select>
            {severities.map(item => <Select.Option key={item.key}
                                                   value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>,
        <Form.Item
          {...formItemLayout}
          labelAlign={"left"}
          key="impact"
          name="impact"
          label={'What is the monetary impact (in USD)'}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}
        >
          <Select>
            {impacts.map(item => <Select.Option key={item.key}
                                                value={item.key}>{item.value}</Select.Option>)}
          </Select>
        </Form.Item>
      ]
    }
  }
  return content;

}

export default AllegationNature;
