import './smallHeader.css';

import { Props } from '../global/global';

export default function SmallHeader({ children }: Props) {
    return <h1 className="smallheader">{children}</h1>;
}
