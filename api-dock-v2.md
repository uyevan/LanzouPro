---
outline: deep
---

<Badge type="danger" text="v1.0.0 - For beta" xmlns="yes"></Badge>

# Lanzou Pro 接口列表

***

本项目基于 Python3.10 开发、Web框架选用 Flask4.0、文档生成工具 VitePress.

| API     | 状态 |                 版本                 | 开发   |
|---------|:--:|:----------------------------------:|------|
| 获取文件与目录 | ✅  | <Badge type="tip" text="^1.0.1" /> | Evan |
| 获取目录    | ✅  | <Badge type="tip" text="^1.0.0" /> | Evan |
| 获取文件    | ✅  | <Badge type="tip" text="^1.0.1" /> | Evan |
| 搜索文件    | ✅  | <Badge type="tip" text="^1.0.0" /> | Evan |
| 依Url解析  | ✅  | <Badge type="tip" text="^1.0.0" /> | Evan |
| 依Id解析   | ✅  | <Badge type="tip" text="^1.0.0" /> | Evan |

#### 🤡 获取全部：getAll

- **路径**：`/getAll`
- **请求方法**：`GET`
- **请求参数**：
    - `url`：需要爬取的蓝奏云链接，必填。
    - `page`：需要爬取的页码，选填，默认值为`1`。
- **返回实例**：

```json
{
  "code": 200,
  "status": "获取成功",
  "folders": [
    {
      "description": "学习资料专区，专对学生做服务。",
      "name": "学习类软件合集",
      "url": "/b0ejszfif"
    },
    ...
  ],
  "files": {
    "info": "sucess",
    "zt": 1,
    "text": [
      {
        "duan": "i20lgp0",
        "icon": "apk",
        "id": "iJXtB20lgp0f",
        "name_all": "大家懂.apk",
        "p_ico": 0,
        "size": "21.4 M",
        "t": 0,
        "time": "5 小时前"
      },
      ...
    ]
  }
}
```

路径说明：获取指定链接下的所有文件夹和文件信息。


***

#### 📂 获取目录：getFolders

- **路径**：`/getFolders`
- **请求方法**：`GET`
- **请求参数**：
    - `url`：需要爬取的蓝奏云链接，必填。
- **返回实例**：

```json
{
  "code": 200,
  "status": "获取成功",
  "folders": [
    {
      "description": "学习资料专区，专对学生做服务。",
      "name": "学习类软件合集",
      "url": "/b0ejszfif"
    },
    ...
  ]
}
```

路径说明：获取指定链接下的所有文件夹信息。

***

#### 📄 获取文件：getFiles

- **路径**：`/getFiles`
- **请求方法**：`GET`
- **请求参数**：
    - `url`：需要爬取的蓝奏云链接，必填。
    - `page`：需要爬取的页码，选填，默认值为`1`。
- **返回实例**：

```json
{
  "code": 200,
  "status": "获取成功",
  "files": {
    "info": "sucess",
    "zt": 1,
    "text": [
      {
        "duan": "i20lgp0",
        "icon": "apk",
        "id": "iJXtB20lgp0f",
        "name_all": "秒播.apk",
        "p_ico": 0,
        "size": "56.4 M",
        "t": 0,
        "time": "6 小时前"
      },
      ...
    ]
  }
}
```

路径说明：获取指定链接下的所有文件信息。

***

#### 🔍 搜索应用：search

- **路径**：`/search`
- **请求方法**：`GET`
- **请求参数**：
    - `url`：需要爬取的蓝奏云链接，必填。
    - `wd`：搜索关键词，必填。
- **返回实例**：

```json
{
  "code": 200,
  "status": "获取成功",
  "files": {
    "info": "sucess",
    "zt": 1,
    "text": [
      {
        "duan": "i20lgp0",
        "icon": "apk",
        "id": "iJXtB20lgp0f",
        "name_all": "秒播.apk",
        "p_ico": 0,
        "size": "56.4 M",
        "t": 0,
        "time": "6 小时前"
      },
      ...
    ]
  }
}
```

路径说明：在指定链接下根据关键词搜索文件信息。

***

#### 🔗 依Url解析：downloadByUrl

- **路径**：`/downloadByUrl`
- **请求方法**：`GET`
- **请求参数**：
    - `url`：需要解析的蓝奏云文件链接，必填。
- **返回实例**：

```json
{
  "code": 200,
  "status": "解析成功",
  "url": "https://c1026.lanosso.com/sdsuhd7.apk"
}
```

路径说明：通过蓝奏云文件链接获取下载链接。

***

#### 🆔 依Id解析：downloadById

- **路径**：`/downloadById`
- **请求方法**：`GET`
- **请求参数**：
    - `id`：需要解析的蓝奏云文件Fid，必填。
- **返回实例**：

```json
{
  "code": 200,
  "status": "解析成功",
  "url": "https://c1026.lanosso.com/sdsuhd7.apk"
}
```

路径说明：通过蓝奏云文件Fid获取下载链接。