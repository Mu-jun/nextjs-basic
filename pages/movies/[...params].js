import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

export default function Detail({ params }) {
  // 방법 1 CSR
  // const router = useRouter();
  // console.log(router);
  // const [title, id] = router.query.params || [];

  // 방법 2 SSR
  console.log(params);
  const [title, id] = params;
  return (
    <div>
      <Seo title={title} />
      <h4>{title || 'Loading...'}</h4>
    </div>
  );
}

export function getServerSideProps({ query: { params } }) {
  return {
    props: { params },
  };
}
