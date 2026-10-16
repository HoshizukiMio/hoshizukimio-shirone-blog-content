/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 config/devices.yaml 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "iphone-17-pro-max",
		name: "iPhone 17 Pro Max",
		brand: "Apple",
		category: "phone",
		status: "active",
		specs: "Pro Max",
		description: "Apple 智能手机。",
		icon: "material-symbols:phone-iphone",
	},
	{
		id: "macbook-air-m5",
		name: "MacBook Air (M5)",
		brand: "Apple",
		category: "computer",
		status: "active",
		specs: "M5",
		description: "搭载 M5 芯片的 MacBook Air。",
		icon: "material-symbols:laptop-mac",
	},
	{
		id: "oneplus-ace-5",
		name: "一加 Ace 5",
		brand: "OnePlus",
		category: "phone",
		status: "active",
		specs: "Ace 5",
		description: "一加 Ace 系列手机。",
		icon: "material-symbols:phone-iphone",
	},
	{
		id: "iphone-xs-max",
		name: "iPhone XS Max",
		brand: "Apple",
		category: "phone",
		status: "active",
		specs: "XS Max",
		description: "Apple 智能手机。",
		icon: "material-symbols:phone-iphone",
	},
	{
		id: "ipad-pro-m5-11",
		name: "iPad Pro 11 英寸 (M5)",
		brand: "Apple",
		category: "tablet",
		status: "active",
		specs: "M5 · 11 英寸",
		description: "11 英寸 iPad Pro。",
		icon: "material-symbols:tablet-mac",
	},
	{
		id: "airpods-pro-3",
		name: "AirPods Pro 3",
		brand: "Apple",
		category: "audio",
		status: "active",
		specs: "Pro 3",
		description: "Apple 无线耳机。",
		icon: "material-symbols:headphones-rounded",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
