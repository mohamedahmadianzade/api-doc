import './header.css';

import { Props } from '../global/global';
export default function Header({ children }: Props) {
    return <h1 className="header">{children}</h1>;
}
