import "./projectVideo.css";
import React from "react";
import { FooterItemsItem } from "../../components/FooterItemsItem";
import { NavigationsWrapper } from "../../components/NavigationsWrapper";
import { SidebarMenu } from "../../components/SidebarMenu";
import { SidebarMenuTitle } from "../../components/SidebarMenuTitle";
import { UserAvatar } from "../../components/UserAvatar";
import { Sports } from "../../icons/Sports";

function ProjectVideos() {
    return (
        <div className="home">
            <div className="div-2">
                <NavigationsWrapper
                    className="design-component-instance-node-2"
                    navigationsNavigationsIconClassName="navigations-instance"
                    navigationsProfileWrapperNavigationsProfileProfilePicClassName="navigations-2"
                    youtubeLogoYoutubeLogo="youtube-logo-2.svg"
                />

                <div className="sidebar">
                    <div className="sidebar-top">
                        <SidebarMenu className="sidebar-menu-instance" />
                        <SidebarMenu
                            className="design-component-instance-node-3"
                            sidebarMenuIconClassName="sidebar-menu-2"
                            text="Explore"
                        />
                        <SidebarMenu
                            className="design-component-instance-node-3"
                            sidebarMenuIconClassName="sidebar-menu-3"
                            text="Subscriptions"
                        />
                    </div>
                    <div className="sidebar-top-2">
                        <div className="border" />
                        <div className="frame">
                            <SidebarMenu
                                className="design-component-instance-node-2"
                                sidebarMenuIconClassName="sidebar-menu-4"
                                text="Library"
                            />
                            {/* Corrected typo "Lİbrary" to "Library" */}
                            <SidebarMenu className="sidebar-menu-5" sidebarMenuIconClassName="sidebar-menu-6" text="History" />
                            <SidebarMenu className="sidebar-menu-7" sidebarMenuIconClassName="sidebar-menu-8" text="Your Videos" />
                            <SidebarMenu className="sidebar-menu-9" sidebarMenuIconClassName="sidebar-menu-10" text="Watch Later" />
                            <SidebarMenu className="sidebar-menu-11" sidebarMenuIconClassName="sidebar-menu-12" text="Liked Videos" />
                            <SidebarMenu className="sidebar-menu-13" sidebarMenuIconClassName="sidebar-menu-14" text="Show More" />
                        </div>
                        <div className="border" />
                    </div>
                    <div className="sidebar-2">
                        <div className="frame-2">
                            <div className="sidebar-menu-item-wrapper">
                                <div className="sidebar-menu-item-2">
                                    <div className="sidebar-menu-icon-2">
                                        <UserAvatar className="user-avatar-instance" />
                                    </div>
                                    <div className="sidebar-menu-title-2">
                                        <div className="text-wrapper-2">James Gouse</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-menu-15">
                                {/* More similar menu items */}
                            </div>
                            <SidebarMenu className="sidebar-menu-21" sidebarMenuIconClassName="sidebar-menu-22" text="Show 13 more" />
                            <SidebarMenuTitle className="design-component-instance-node-2" />
                        </div>
                        <div className="border" />
                    </div>
                    <div className="sidebar-more-from">
                        <div className="frame-3">
                            <SidebarMenu
                                className="sidebar-menu-23"
                                sidebarMenuIconClassName="sidebar-menu-24"
                                text="Youtube Premium"
                            />
                            <SidebarMenu className="sidebar-menu-25" sidebarMenuIconClassName="sidebar-menu-26" text="Gaming" />
                            <SidebarMenu className="sidebar-menu-27" sidebarMenuIconClassName="sidebar-menu-28" text="Live" />
                            <div className="sidebar-menu-17">
                                <div className="sidebar-menu-item-2">
                                    <div className="sidebar-menu-icon-2">
                                        <Sports className="sports-instance" />
                                    </div>
                                    <div className="sidebar-menu-title-2">
                                        <div className="text-wrapper-2">Sports</div>
                                    </div>
                                </div>
                            </div>
                            <SidebarMenuTitle className="design-component-instance-node-2" text="MORE FROM YOUTUBE" />
                        </div>
                        <div className="border" />
                    </div>
                    <div className="navigations-bottom">
                        <div className="frame-4">
                            <SidebarMenu
                                className="design-component-instance-node-2"
                                sidebarMenuIconClassName="sidebar-menu-29"
                                text="Settings"
                            />
                            <SidebarMenu
                                className="sidebar-menu-5"
                                sidebarMenuIconClassName="sidebar-menu-30"
                                text="Report history"
                            />
                            <SidebarMenu className="sidebar-menu-7" sidebarMenuIconClassName="sidebar-menu-31" text="Help" />
                            <SidebarMenu className="sidebar-menu-9" sidebarMenuIconClassName="sidebar-menu-32" text="Send feedback" />
                        </div>
                        <div className="border" />
                    </div>
                    <div className="navigations-footer">
                        <div className="footer-items">
                            <div className="frame-5">
                                <div className="overlap-2">
                                    <FooterItemsItem className="design-component-instance-node-2" text="About" />
                                    <FooterItemsItem className="footer-items-item-instance" text="Press" />
                                    <FooterItemsItem className="footer-items-item-2" text="Copyright" />
                                </div>
                                <FooterItemsItem className="footer-items-item-3" text="Contact us" />
                                <FooterItemsItem className="footer-items-item-4" text="Creators" />
                                <div className="overlap-group-2">
                                    <FooterItemsItem className="design-component-instance-node-2" text="Advertise" />
                                    <FooterItemsItem className="footer-items-item-5" text="Developers" />
                                </div>
                            </div>
                        </div>
                        <div className="frame-wrapper">
                            <div className="frame-6">
                                <div className="overlap-group-3">
                                    <FooterItemsItem className="design-component-instance-node-2" text="Terms" />
                                    <FooterItemsItem className="footer-items-item-6" text="Privacy" />
                                    <FooterItemsItem className="footer-items-item-7" text="Policy &amp; Safety" />
                                </div>
                                <FooterItemsItem className="footer-items-item-3" text="How Youtube works" />
                                <FooterItemsItem className="footer-items-item-8" text="Test new features" />
                            </div>
                        </div>
                        <div className="footer-items-item-wrapper">
                            <FooterItemsItem
                                className="design-component-instance-node-3"
                                divClassName="footer-items-item-9"
                                text="© 2021 Google LLC"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectVideos;
