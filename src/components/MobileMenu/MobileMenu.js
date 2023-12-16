/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import {DialogOverlay, DialogContent} from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import {WEIGHTS} from "../../constants";

const MobileMenu = ({isOpen, onDismiss}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <MobileNav>
          <MobileNavLink href="/sale">Sale</MobileNavLink>
          <MobileNavLink href="/new">New&nbsp;Releases</MobileNavLink>
          <MobileNavLink href="/men">Men</MobileNavLink>
          <MobileNavLink href="/women">Women</MobileNavLink>
          <MobileNavLink href="/kids">Kids</MobileNavLink>
          <MobileNavLink href="/collections">Collections</MobileNavLink>
        </MobileNav>
        <MobileFooter>
          <MobileFooterLink href="/terms">
            Terms and Conditions
          </MobileFooterLink>
          <MobileFooterLink href="/privacy">Privacy Policy</MobileFooterLink>
          <MobileFooterLink href="/contact">Contact Us</MobileFooterLink>
        </MobileFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--color-overlay);

  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;

  padding: 16px;
`;

const Content = styled(DialogContent)`
  background-color: white;
  width: 300px;
  height: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;
`;

const Filler = styled.div`
  flex: 1;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileNavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: calc(18 / 16 * 1rem);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const MobileFooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: calc(14 / 16 * 1rem);
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
`;

export default MobileMenu;
