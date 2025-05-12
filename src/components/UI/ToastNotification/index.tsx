import React, { useEffect } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface ToastProps {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
  onClose: () => void;
}

const ToastNotification: React.FC<ToastProps> = ({
  open,
  message,
  severity,
  onClose,
}) => {
    const TIME = 3000
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, TIME);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  const backgroundColor = {
    success: "#4caf50",
    error: "#f44336",
    info: "#2196f3",
    warning: "#ff9800",
  }[severity];

  return (
    <Snackbar
      open={open}
      autoHideDuration={TIME}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SnackbarContent
        sx={{
          backgroundColor,
          color: "#fff",
          borderRadius: "4px",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
        }}
        message={message}
        action={
          <IconButton size="small" color="inherit" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default ToastNotification;
