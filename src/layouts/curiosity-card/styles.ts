import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { IconProps } from "./types";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary._100};
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._500};
  margin-bottom: 8px;
`;

export const Content = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary._500};
`;

export const Footer = styled.View`
  margin-top: 24px;
  gap: 18px;
  flex-direction: row;
  align-items: flex-end;
`;

export const FooterLeft = styled.View`
  margin-right: auto;
  gap: 6px;
`;

export const FooterLeftIcons = styled.View`
  flex-direction: row;
  gap: 14px;
`;

export const FooterLeftText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary._500};
  font-size: 14px;
`;

export const Icon = styled(Ionicons)<IconProps>`
  padding: 4px;
  color: ${({ theme, color }) => color || theme.colors.primary._500};
`;
