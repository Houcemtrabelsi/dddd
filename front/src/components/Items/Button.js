import styled, { css } from "styled-components";
import * as style from "../../constants/StyleSheets";

export const Button = styled.button`
  cursor: pointer;
  margin-inline: ${style.spacing.MARGIN_MEDIUM};
  padding: ${style.spacing.PADDING_SMALL} ${style.spacing.PADDING_LARGE};
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  border-radius: 5px;

  ${(props) =>
    props.hasBackground
      ? css`
          border-width: 2px;
          background-color: ${(props) => props.theme.PRIMARY_COLOR};
          border-color: ${(props) =>
            props.hasborder ? props.theme.PRIMARY_COLOR : "transparent"};

          color: ${(props) => props.theme.BACKGROUND_COLOR};
          &:hover {
            background-color: ${(props) =>
              props.variant !== "outline"
                ? props.theme.BACKGROUND_COLOR
                : props.theme.PRIMARY_COLOR};
            color: ${(props) =>
              props.variant !== "outline"
                ? props.theme.PRIMARY_COLOR
                : props.theme.BACKGROUND_COLOR};
          }
        `
      : css`
          ${props.hasborder
            ? css`
                border-width: 2px;
                background-color: ${(props) => props.theme.BACKGROUND_COLOR};
                border-color: ${(props) =>
                  props.hasborder ? props.theme.PRIMARY_COLOR : "transparent"};
                color: ${(props) => props.theme.PRIMARY_COLOR};
                &:hover {
                  background-color: ${props.theme.PRIMARY_COLOR};
                  color: ${(props) =>
                    props.variant !== "outline" ? "#25243A" : "#FFD400"};
                }
              `
            : css`
                color: ${props.theme.TEXT_COLOR};
                border: "none";
                border-color: transparent;
                &:hover {
                  color: ${props.theme.PRIMARY_COLOR};
                }
              `}
        `}/* &:hover {
    background-color: ${(props) =>
    props.variant !== "outline" ? "#FFD400" : "#25243A"};
    color: ${(props) => (props.variant !== "outline" ? "#25243A" : "#FFD400")};
  } */
`;
