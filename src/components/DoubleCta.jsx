import React from 'react'
import styled from '@emotion/styled'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Link } from 'gatsby'

const Wrapper = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin: 0 auto;
	max-width: 500px;
`

const MainCta = styled('button')`
	@media (min-width: 576px) {
		padding: 0.5rem 5rem;
	}
	height: auto;
	display: inline-block;
	border: 3px solid black;
	padding: 0 3rem;
	margin: 0;
	text-decoration: none;
	border-radius: 15px;
	background: black;
	color: white;
	cursor: pointer;
	text-align: center;
	transition: background 250ms ease-in-out, transform 200ms ease,
		color 100ms ease-in-out;
	-webkit-appearance: none;
	-moz-appearance: none;

	&:hover,
	&:focus {
		background: transparent;
		color: black;
		transform: scale(1.2);
	}

	&:focus {
		outline-offset: -4px;
	}

	&:active {
		background: transparent;
		transform: scale(0.9);
	}
`

const SecondaryCta = styled('a')`
	margin-top: 0.5rem;
	text-decoration: underline wavy black;
`

export default function DoubleCta({
	mainCta,
	secondaryCta,
	showSecondary = true,
}) {
	// const testFirebase = () => {

	//     addDoc(collection(db, "test-form-submission"), {
	//         stringField: "This is anothertest"
	//     })
	//         .then(() => {
	//             alert('Message submitted 👍');
	//         })
	//         .catch((error) => {
	//             alert(error.message);
	//         });
	// };
	return (
		<Wrapper>
			<Link to='/upload'>
				<MainCta>{mainCta}</MainCta>
			</Link>
			{showSecondary && <SecondaryCta>{secondaryCta}</SecondaryCta>}
		</Wrapper>
	)
}
