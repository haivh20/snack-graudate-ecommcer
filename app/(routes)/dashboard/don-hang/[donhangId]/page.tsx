import React from "react";

const DonHangIdPage = ({ params }: { params: { donhangId: string } }) => {
  return <div>DonHangIdPage - {params.donhangId}</div>;
};

export default DonHangIdPage;
