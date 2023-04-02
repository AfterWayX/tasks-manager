import NavLink from './NavLink';
import { NavLinkInterface } from '../interfaces/NavLink.interface';

export default function NavHeader() {
    const headerLinks: NavLinkInterface[] = [
        { link: '/tasks', title: 'Tasks' },
        { link: '/about', title: 'About' }
    ]
    return (
        <ul className="flex gap-x-5 items-center">
            {
                headerLinks.map(({link, title}) => <NavLink link={link} title={title} />)
            }
        </ul>
    )
}


