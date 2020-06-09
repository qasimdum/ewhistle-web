import React from 'react';
import Image1 from "../../../assets/image_1.png";
import {Carousel} from "antd";
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'

function Quotes() {
	const quotesRef = React.useRef();
	return (
		<Carousel className={'quotes'} ref={quotesRef} dots={false}>
			<div>
				<blockquote className="blockquote">Often the best source of information about waste, fraud, and abuse in government is an existing government employee committed to public integrity and willing to speak out.
				</blockquote>
				<div className={'quotes-footer-wrapper'}>
					<div className={'quotes-footer'}>
						<div className={'quotes-footer-image'}>
							<img src={Image1} alt={'Adnoc'} />
						</div>
						<div className={'quotes-footer-info'}>
							<div className={'title'}>Ex-President Barak Obama</div>
							<div className={'position'}>VP-Logistics</div>
						</div>
					</div>
					<div className={'quotes-navigation'}>
						<ArrowLeftOutlined onClick={() => quotesRef.current.prev()} />
						&nbsp;
						<ArrowRightOutlined  onClick={() => quotesRef.current.next()}/>
					</div>
				</div>
			</div>
			<div>
				<blockquote className="blockquote">Every country needs its whistleblowers. They are crucial to a healthy society. The employee who, in the public interest, has the independence of judgement and the personal courage to challenge malpractice or illegality is a kind of public hero
				</blockquote>
				<div className={'quotes-footer-wrapper'}>
					<div className={'quotes-footer'}>
						<div className={'quotes-footer-image'}>
							<img src={Image1} alt={'Adnoc'} />
						</div>
						<div className={'quotes-footer-info'}>
							<div className={'title'}>Fuad Alakbarov</div>
							<div className={'position'}>VP-Logistics</div>
						</div>
					</div>
					<div className={'quotes-navigation'}>
						<ArrowLeftOutlined onClick={() => quotesRef.current.prev()} />
						&nbsp;
						<ArrowRightOutlined  onClick={() => quotesRef.current.next()}/>
					</div>
				</div>
			</div>

			<div>
				<blockquote className="blockquote">One thing I learned as a journalist is that there is at least one disgruntled person in every workplace in America -- and at least double that number with a conscience. Hard as they try, they simply can't turn their heads away from an injustice when they see one taking place.
				</blockquote>
				<div className={'quotes-footer-wrapper'}>
					<div className={'quotes-footer'}>
						<div className={'quotes-footer-image'}>
							<img src={Image1} alt={'Adnoc'} />
						</div>
						<div className={'quotes-footer-info'}>
							<div className={'title'}>Michael Moore</div>
							<div className={'position'}>VP-Logistics</div>
						</div>
					</div>
					<div className={'quotes-navigation'}>
						<ArrowLeftOutlined onClick={() => quotesRef.current.prev()} />
						&nbsp;
						<ArrowRightOutlined  onClick={() => quotesRef.current.next()}/>
					</div>
				</div>
			</div>
			<div>
				<blockquote className="blockquote">The public needs to know the kinds of things a government does in its name, or the 'consent of the governed' is meaningless... The consent of the governed is not consent if it is not informed.
				</blockquote>
				<div className={'quotes-footer-wrapper'}>
					<div className={'quotes-footer'}>
						<div className={'quotes-footer-image'}>
							<img src={Image1} alt={'Adnoc'} />
						</div>
						<div className={'quotes-footer-info'}>
							<div className={'title'}>Edward Snowden</div>
							<div className={'position'}>VP-Logistics</div>
						</div>
					</div>
					<div className={'quotes-navigation'}>
						<ArrowLeftOutlined onClick={() => quotesRef.current.prev()} />
						&nbsp;
						<ArrowRightOutlined  onClick={() => quotesRef.current.next()}/>
					</div>
				</div>
			</div>
		</Carousel>
	)
}
export default Quotes;
