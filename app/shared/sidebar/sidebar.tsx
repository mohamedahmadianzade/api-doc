'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
export default function SidebarMenu() {
    const router = usePathname();
    return (
        <>
            <Sidebar>
                <Menu>
                    <MenuItem
                        className={
                            router == '/targetGroup'
                                ? 'activeMenu'
                                : 'normalMenu'
                        }
                        component={<Link href="/targetGroup" />}
                    >
                        Target Groups
                    </MenuItem>
                    <MenuItem
                        className={
                            router == '/pricing' ? 'activeMenu' : 'normalMenu'
                        }
                        component={<Link href="/pricing" />}
                    >
                        Pricing
                    </MenuItem>
                    <MenuItem
                        className={
                            router == '/authentication'
                                ? 'activeMenu'
                                : 'normalMenu'
                        }
                        component={<Link href="/authentication" />}
                    >
                        Authentication
                    </MenuItem>
                    <MenuItem
                        className={
                            router == '/returnTypes'
                                ? 'activeMenu'
                                : 'normalMenu'
                        }
                        component={<Link href="/returnTypes" />}
                    >
                        Return Types
                    </MenuItem>

                    <SubMenu
                        className="normalMenu"
                        component={<Link href="/account" />}
                        label="Account"
                    >
                        <MenuItem
                            className={
                                router === '/account/plan'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/account/plan" />}
                        >
                            Plan
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/account/credit'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/account/credit" />}
                        >
                            Credit
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        className="normalMenu"
                        component={<Link href="/videos" />}
                        label="Videos"
                    >
                        <MenuItem
                            className={
                                router === '/videos/getAll'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/videos/getAll" />}
                        >
                            Get all Videos
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/videos/delete'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/videos/delete" />}
                        >
                            Delete a video
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/videos/status'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/videos/status" />}
                        >
                            Get video status
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/videos/information'
                                    ? 'activeMenu'
                                    : ''
                            }
                            component={<Link href="/videos/information" />}
                        >
                            Get video information
                        </MenuItem>
                        <SubMenu
                            className="normalMenu"
                            component={<Link href="/videos/create" />}
                            label="Create"
                        >
                            <MenuItem
                                className={
                                    router === '/videos/create/shared'
                                        ? 'activeMenu'
                                        : ''
                                }
                                component={
                                    <Link href="/videos/create/shared" />
                                }
                            >
                                Shared parameters
                            </MenuItem>
                            <MenuItem
                                className={
                                    router === '/videos/create/url'
                                        ? 'activeMenu'
                                        : ''
                                }
                                component={<Link href="/videos/create/url" />}
                            >
                                URL
                            </MenuItem>
                            <MenuItem
                                className={
                                    router === '/videos/create/form'
                                        ? 'activeMenu'
                                        : ''
                                }
                                component={<Link href="/videos/create/form" />}
                            >
                                Form
                            </MenuItem>
                            <MenuItem
                                className={
                                    router === '/videos/create/product'
                                        ? 'activeMenu'
                                        : ''
                                }
                                component={
                                    <Link href="/videos/create/product" />
                                }
                            >
                                Product
                            </MenuItem>
                        </SubMenu>
                    </SubMenu>

                    <SubMenu
                        className="normalMenu"
                        component={<Link href="/catalogue" />}
                        label="Catalogue"
                    >
                        <MenuItem
                            className={
                                router === '/catalogue/full'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/catalogue/full" />}
                        >
                            Full Catalogue
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/catalogue/item'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/catalogue/item" />}
                        >
                            Item
                        </MenuItem>{' '}
                        <MenuItem
                            className={
                                router === '/catalogue/imageResizing'
                                    ? 'activeMenu'
                                    : ''
                            }
                            component={<Link href="/catalogue/imageResizing" />}
                        >
                            Image Resizing
                        </MenuItem>{' '}
                        <MenuItem
                            className={
                                router === '/catalogue/audioPreview'
                                    ? 'activeMenu'
                                    : ''
                            }
                            component={<Link href="/catalogue/audioPreview" />}
                        >
                            Audio Preview
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        className="normalMenu"
                        component={<Link href="/media" />}
                        label="Media"
                    >
                        <MenuItem
                            className={
                                router === '/media/getAll'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/media/getAll" />}
                        >
                            Get all
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/media/delete'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/media/delete" />}
                        >
                            Delete
                        </MenuItem>{' '}
                        <MenuItem
                            className={
                                router === '/media/get'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/media/get" />}
                        >
                            Get
                        </MenuItem>{' '}
                        <MenuItem
                            className={
                                router === '/media/upload'
                                    ? 'activeMenu'
                                    : 'normalMenu'
                            }
                            component={<Link href="/media/upload" />}
                        >
                            Upload
                        </MenuItem>
                    </SubMenu>

                    <SubMenu
                        className="normalMenu"
                        component={<Link href="/webhook" />}
                        label="Webhook"
                    >
                        <MenuItem
                            className={
                                router === '/webhook/systemRegister'
                                    ? 'activeMenu'
                                    : ''
                            }
                            component={<Link href="/webhook/systemRegister" />}
                        >
                            System Registration
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/webhook/userRegister'
                                    ? 'activeMenu'
                                    : ''
                            }
                            component={<Link href="/webhook/userRegister" />}
                        >
                            User Registration
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/webhook/supportedEvent'
                                    ? 'activeMenu'
                                    : ''
                            }
                            component={<Link href="/webhook/supportedEvent" />}
                        >
                            Supported Events
                        </MenuItem>
                        <MenuItem
                            className={
                                router === '/webhook/example'
                                    ? 'activeMenu'
                                    : ''
                            }
                            component={<Link href="/webhook/example" />}
                        >
                            Example
                        </MenuItem>
                    </SubMenu>
                    <MenuItem
                        className={
                            router === '/responses'
                                ? 'activeMenu'
                                : 'normalMenu'
                        }
                        component={<Link href="/responses" />}
                    >
                        Responses
                    </MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}
