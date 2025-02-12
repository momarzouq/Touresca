import React from 'react'
import Container from '../../../UI/Container'
import Google from '../../../assets/Google_logo.svg'
import Amazon from '../../../assets/Amazon_logo.svg'
import Microsoft from '../../../assets/Microsoft_logo.svg'
import IBM from '../../../assets/IBM_logo.svg'
export default function OurPartners() {
  return (
<Container className="text-center pt-14">
  <h2 className="text-[40px] text-[#095763] font-semibold">Our Partners</h2>
  <div className="logos">
    <div className="logos-slide">
      <img src={Google} alt="Google" />
      <img src={Amazon} alt="Amazon" />
      <img src={Microsoft} alt="Microsoft" />
      <img src={IBM} alt="IBM" />
      <img src={Google} alt="Google" />
      <img src={Amazon} alt="Amazon" />
      <img src={Microsoft} alt="Microsoft" />
      <img src={IBM} alt="IBM" />
      <img src={Google} alt="Google" />
      <img src={Amazon} alt="Amazon" />
      <img src={Microsoft} alt="Microsoft" />
      <img src={IBM} alt="IBM" />
    </div>
  </div>
</Container>

  )
}
