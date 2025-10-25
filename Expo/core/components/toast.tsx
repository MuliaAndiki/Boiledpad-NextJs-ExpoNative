import { useEffect, useRef } from "react";
import { Animated, Dimensions,StyleSheet, Text, View } from "react-native";

import { useTheme } from "@/core/providers/theme.provinder";

const { width } = Dimensions.get("window");

const iconMap: Record<
  string,
  { emoji: string; bgColor: string; borderColor: string; textColor: string }
> = {
  success: {
    emoji: "✅",
    bgColor: "#d4f4e2",
    borderColor: "#22c55e",
    textColor: "#14532d",
  },
  error: {
    emoji: "�突出",
    bgColor: "#fee2e2",
    borderColor: "#ef4444",
    textColor: "#7f1d1d",
  },
  warning: {
    emoji: "⚠️",
    bgColor: "#fef9c3",
    borderColor: "#eab308",
    textColor: "#713f12",
  },
  info: {
    emoji: "ℹ️",
    bgColor: "#dbeafe",
    borderColor: "#3b82f6",
    textColor: "#1e3a8a",
  },
  question: {
    emoji: "❓",
    bgColor: "#f3e8ff",
    borderColor: "#a855f7",
    textColor: "#5b21b6",
  },
};

interface ToastContainerProps {
  title: string;
  message: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
  onClose?: () => void;
}

export const ToastContainer = ({
  title,
  message,
  icon = "info",
  onClose,
}: ToastContainerProps) => {
  const { isDark } = useTheme();
  const slideAnim = useRef(new Animated.Value(-120)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const iconData = iconMap[icon];

  useEffect(() => {
    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 80,
        friction: 10,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 12,
      }),
    ]).start();

    const timer = setTimeout(() => {
      hideToast();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const hideToast = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -120,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose?.();
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <View
        style={[
          styles.toast,
          {
            backgroundColor: isDark
              ? "rgba(31, 41, 55, 0.9)"
              : iconData.bgColor,
            borderColor: iconData.borderColor,
            shadowColor: isDark ? "#000" : "#00000033",
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <Text style={styles.emoji}>{iconData.emoji}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              { color: isDark ? "#f3f4f6" : iconData.textColor },
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.message,
              { color: isDark ? "#d1d5db" : iconData.textColor },
            ]}
          >
            {message}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 9999,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  toast: {
    width: width * 0.92,
    maxWidth: 420,
    padding: 18,
    borderRadius: 20,
    borderWidth: 1.5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight transparency for glassmorphism
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  emoji: {
    fontSize: 28,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  message: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    opacity: 0.9,
  },
});
