import Link from "next/link";

import NavStyled from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyled>
      <Link href='/Items'>
        <a>Items</a>
      </Link>
      <Link href='/sell'>
        <a>Sell</a>
      </Link>
      <Link href='/Signup'>
        <a>Signup</a>
      </Link>
      <Link href='/orders'>
        <a>orders</a>
      </Link>
      <Link href='/me'>
        <a>me</a>
      </Link>
    </NavStyled>
  );
}
