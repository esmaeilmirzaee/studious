import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <h2>Not found.</h2>
      <Link href='/'>
        <span>
          Back to
          <a> home page</a>
        </span>
      </Link>
    </>
  );
};

export default NotFound;
