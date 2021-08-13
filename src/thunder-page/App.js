import React, { useState } from "react";
import { Button, Select, Row, Col } from "antd";
import CodeEdit from "./CodeEdit";
const { Option } = Select;

function thunder(urlList, vType) {
	let taskLists = urlList.map((item) => {
		return {
			name: `${item.index}-${item.name}.${item.url
				.split("/")
				.pop()
				.split(".")
				.pop()}`,
			url: item.url,
			dir: "",
		};
	});
	thunderLink.newTask({
		downloadDir: "",
		installFile: "",
		taskGroupName: vType,
		tasks: taskLists,
		excludePath: "",
		createShortcut: {
			name: "测试",
			targetFile: "thunder9/OnlineInstall9.1.49.1060xl.exe",
			runParams: "a",
		},
		userAgent: "My-User-Agent",
		threadCount: 10,
		referer: "",
	});
}
export default function App(props) {
	let [jsonText, setJsonText] = useState({});
	let [vType, setVType] = useState('zipai');
	return (
		<>
			<Row>
				<Col span={3} style={{ margin: "10px" }}>
					<Select
						defaultValue={vType}
						style={{ width: 120 }}
						onChange={(value) => {setVType(value)}}
					>
						<Option value="zipai">zipai</Option>
						<Option value="shouji">shouji</Option>
						<Option value="youma">youma</Option>
					</Select>
				</Col>
				<Col
					span={3}
					style={{ margin: "10px" }}
					onClick={() => {
						try {
							let json = JSON.parse(jsonText);
							console.log(json);
							thunder(json, vType);
						} catch (e) {}
					}}
				>
					<Button type="primary">download</Button>
				</Col>
				<Col span={24}>
					<CodeEdit onChange={(newValue) => setJsonText(newValue)} />
				</Col>
			</Row>
		</>
	);
}
