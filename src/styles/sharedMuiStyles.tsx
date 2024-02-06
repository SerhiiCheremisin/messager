import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { colors } from "./colors";

export const MessageBase = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    alignItems: "center", 
    borderRadius: "15px",
    width: "40%",
    minHeight: "80px",
    backgroundColor: `${colors.secondayColor}`,
    margin: "10px",
    cursor: "pointer",
    padding: "10px"
})

export const MessageWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "50px 0"
})

export const MessageHeaderColumn = styled(Box)({
    display: "flex",
    position: "absolute",
    top: 0,
    padding: "10px 10px 10px 80px",
    height: "50px",
    width: "100%",
    backgroundColor: `${colors.colorActive}`,
})

export const MessageInput = styled(Box)({
    display: "flex",
    position: "absolute",
    bottom: 0,
    minHeight: "50px",
    width: "100%",
    backgroundColor: `${colors.colorActive}`,
    padding: "10px 10px 10px 80px",
    borderTop: "3px solid black"
})

export const SingleMessageText = styled(Typography)({
    fontSize: 25,
    color: `${colors.textColorPrimal}`
})

export const SingleDateText = styled(Typography)({
    fontSize: 15,
    color: `${colors.textColorSecondary}`
})

export const InputForm = styled(Box)({
    display: "flex",
    width: "90%",
    justifyContent: "space-between"
})

export const ModalStyled = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 800,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
}