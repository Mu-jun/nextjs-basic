import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Image
        src="/vercel.svg"
        alt="logo"
        width={parseInt(283 / 2)} // 소수점이 들어가면 안되므로 parseInt로 정수변환
        height={parseInt(64 / 2)}
        priority={true} // 최상단 이미지의 경우 사전에 로딩되어야 하므로 이 옵션을 널어주면 사용자가 빠르게 볼 수 있다.
      />
      <div>
        <Link href={`/`} className={router.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link
          href={`/about`}
          className={router.pathname === '/about' ? 'active' : ''}
        >
          About
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
