import React, {useState} from 'react';

function SideMenu(props) {
    const [collapse, setCollapse] = useState(false)
    const [dropdownOpened, setDropdownOpened] = useState(false)

    const clickCollapse = () => {
        setCollapse(!collapse)
    }
    const dropdownClick = (e) => {
        setDropdownOpened(!dropdownOpened)
    }
    // function clickCollapse(){
    //     document.querySelector(".sdds-sidebar").classList.toggle('sdds-sidebar-collapse');
    //     return false;
    // }
    //
    // const popover = document.querySelector('#popover');
    // popover.addEventListener("mouseleave", hidePopover, false);
    //
    // const sidebar = document.querySelector('.sdds-sidebar');
    //
    // const menus = document.querySelectorAll('.sdds-navbar-menu-hover');
    // menus.forEach(function(menu){
    //     menu.addEventListener("mouseenter", onHoverMenu, false);
    //     menu.addEventListener("mouseleave", onLeaveMenu, false);
    // });
    //
    // function onLeaveMenu(event){
    //     // hide popover if mouse position outside of popover.getBoundingClientRect()
    // }
    //
    // function hidePopover(event){
    //     if(!sidebar.classList.contains('sdds-sidebar-collapse')) return;
    //
    //     popover.style.display = 'none';
    //     popover.innerHTML='';
    // }
    //
    // function onHoverMenu(event){
    //     if(!sidebar.classList.contains('sdds-sidebar-collapse')) return;
    //
    //     popover.innerHTML='';
    //
    //     var elem = event.target;
    //     var posX = elem.getBoundingClientRect().left + elem.offsetWidth + 2;
    //     var posY = elem.getBoundingClientRect().top;
    //     var classes = event.target.className;
    //     var newElem = document.createElement('div');
    //
    //     newElem.className = classes;
    //     newElem.innerHTML = elem.innerHTML;
    //
    //     popover.appendChild(newElem);
    //     popover.style.top = posY + 'px';
    //     popover.style.left = posX + 'px';
    //     popover.style.display = 'block';
    //
    // function dropdownClick(event){
    //     // console.log(event)
    //     event.classList.toggle('opened');
    // }


    return (

        <div className="sdds-push sdds-demo-container">
            <div className={`sdds-sidebar expanded ${collapse ? 'sdds-sidebar-collapse' : null}`}>
                <div className="sdds-navbar-side-menu expanded"
                     // style={{position: 'relative'}}
                >
                    <ul className="sdds-navbar-menu-list">
                        <li className={"sdds-navbar-menu-item sdds-navbar-menu-hover"}>
                            {
                                collapse &&
                                    <div id="popover"
                                         className="sdds-navbar-menu-popover"
                                         style={{position: 'fixed'}}>

                                    </div>
                            }
                            <span className="sdds-navbar-icon-button">
                                <svg width="20" height="20" viewBox="0 0 20 20"
                                     fill="#e2e2e4"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.334473" width="20" height="20"/> </svg></span>
                            <a className="sdds-navbar-menu-item-link" href="#">
                                Item 1
                            </a>
                        </li>
                        <li className="sdds-navbar-menu-item sdds-navbar-menu-hover">
                            <span className="sdds-navbar-icon-button">
                                <svg width="20" height="20" viewBox="0 0 20 20"
                                     fill="#e2e2e4"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.334473" width="20" height="20"/> </svg></span>
                            <a className="sdds-navbar-menu-item-link" href="#">
                                Item 2
                            </a>
                        </li>

                        <li className="sdds-navbar-menu-item sdds-navbar-menu-hover">
                            <span className="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20"
                                                                           fill="#e2e2e4"
                                                                           xmlns="http://www.w3.org/2000/svg"><rect
                                y="0.334473" width="20" height="20"/> </svg></span>
                            <a className="sdds-navbar-menu-item-link" href="#">
                                Item 3
                            </a>
                        </li>
                        <li className="sdds-navbar-menu-item sdds-navbar-menu-hover">
                            <span className="sdds-navbar-icon-button"><svg width="20" height="20" viewBox="0 0 20 20"
                                                                           fill="#e2e2e4"
                                                                           xmlns="http://www.w3.org/2000/svg"><rect
                                y="0.334473" width="20" height="20"/> </svg></span>
                            <a className="sdds-navbar-menu-item-link" href="#">
                                Item 4
                            </a>
                        </li>
                        <li className={`sdds-navbar-menu-item-dropdown sdds-navbar-menu-hover ${dropdownOpened ? "opened":null}`}
                            onClick={() => dropdownClick()}>
                            <div className="sdds-navbar-menu-item-dropdown-parent">
                                <span className="sdds-navbar-icon-button">
                                    <svg width="20" height="20"
                                         viewBox="0 0 20 20" fill="#e2e2e4"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.334473" width="20" height="20"/> </svg></span>
                                <a className="sdds-navbar-menu-item-link" href="#">
                                    <span className="sdds-menu-item-dropdown-text">Item 5</span>
                                    <span className="sdds-icon-arrow"/>
                                </a>
                            </div>
                            <ul className={"sdds-navbar-menu__dropdown-menu"}>
                                <li className="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-1 long
                                    label...</a></li>
                                <li className="sdds-navbar-menu__dropdown-item active"><a href="#">Sub item 3-2</a></li>
                                <li className="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-3</a></li>
                                <li className="sdds-navbar-menu__dropdown-item"><a href="#">Sub item 3-4</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="sdds-navbar-menu-item sdds-navbar-menu-item-bottom sdds-navbar-menu-hide-on-mobile"
                         onClick={() => clickCollapse()}
                    >
                        <span className="sdds-navbar-icon-button">
                            <svg width="20" height="20" viewBox="0 0 20 20"
                                 fill="#e2e2e4"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.334473" width="20" height="20"/> </svg></span>
                        <a id="collapse-btn" className="sdds-navbar-menu-item-link" href="#">
                            Collapse
                        </a>
                    </div>
                </div>
                <div id="popover"
                     className="sdds-navbar-menu-popover"
                     style={{display: 'none', position: 'fixed'}}>

                </div>
            </div>
        </div>
    );
}

export default SideMenu;
