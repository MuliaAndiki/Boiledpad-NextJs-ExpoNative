import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "@/core/providers/theme.provinder";
import { ModalProps } from "@/types/ui";

const { width } = Dimensions.get("window");

const iconMap = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
  question: "❓",
};

interface AlertModalInternalProps extends ModalProps {
  open: boolean;
  setOpen: (v: boolean) => void;
  cancelText?: string;
  onCancel?: () => void;
}

export function AlertModal({
  open,
  setOpen,
  title,
  deskripsi,
  icon = "info",
  confirmButtonText = "OK",
  confirmButtonColor = "primary",
  cancelText,
  onConfirm,
  onCancel,
}: AlertModalInternalProps) {
  const { isDark, colors } = useTheme();
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (open) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 80,
          friction: 10,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [open]);

  const getButtonColor = () => {
    switch (confirmButtonColor) {
      case "primary":
        return colors.primary;
      case "destructive":
        return colors.destructive;
      case "secondary":
        return colors.secondary;
      default:
        return colors.primary;
    }
  };

  return (
    <Modal
      transparent
      visible={open}
      animationType="none"
      onRequestClose={() => setOpen(false)}
    >
      <Animated.View 
        style={[
          styles.overlay,
          { opacity: opacityAnim }
        ]}
      >
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: isDark ? colors.card : "#ffffff",
              borderColor: isDark ? colors.border : "#e5e7eb",
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
          <Text style={styles.icon}>{iconMap[icon]}</Text>

          <Text
            style={[styles.title, { color: isDark ? "#f9fafb" : "#111827" }]}
          >
            {title}
          </Text>

          <Text
            style={[
              styles.description,
              { color: isDark ? "#d1d5db" : "#6b7280" },
            ]}
          >
            {deskripsi}
          </Text>

          <View style={styles.buttonContainer}>
            {cancelText && (
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.cancelButton,
                  {
                    backgroundColor: isDark ? "#374151" : "#f3f4f6",
                    borderColor: isDark ? "#4b5563" : "#d1d5db",
                  },
                ]}
                onPress={() => {
                  onCancel?.();
                  setOpen(false);
                }}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: isDark ? "#f9fafb" : "#374151" },
                  ]}
                >
                  {cancelText}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[
                styles.button,
                styles.confirmButton,
                { backgroundColor: getButtonColor() },
              ]}
              onPress={() => {
                onConfirm?.();
                setOpen(false);
              }}
            >
              <Text style={[styles.buttonText, { color: "#ffffff" }]}>
                {confirmButtonText}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    width: width * 0.85,
    maxWidth: 400,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  icon: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    borderWidth: 1,
  },
  confirmButton: {},
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
