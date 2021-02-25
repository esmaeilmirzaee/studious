const Footer = () => {
  return (
    <>
      <p className='fixed bottom-0 left-0 justify-center items-center'>
        Copyright 2021
      </p>
      <style jsx>
        {`
          .footer {
            display: flex;
            justify-content: center;
            color: #333541;
            position: fix;
            bottom: 0;
            left: 0;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
