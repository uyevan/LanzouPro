---
{
  title: V1接口 🅰️
}
---

<Badge type="warning" text="v1.0.2 - For beta" xmlns="yes"></Badge>

# Lanzou Pro V1 接口列表

***

本项目基于 Python3.10 开发、Web框架选用 Flask4.0、文档生成工具 VitePress.

| API     | 状态 |                 版本                 | 路由                                          |
|---------|:--:|:----------------------------------:|:--------------------------------------------|
| 获取文件与目录 | ✅  | <Badge type="tip" text="^1.0.1" /> | `/v1/getFilesAndDirectories?url={}&page={}` |
| 获取目录    | ✅  | <Badge type="tip" text="^1.0.0" /> | `/v1/getDirectory?url={}`                   |
| 获取文件    | ✅  | <Badge type="tip" text="^1.0.1" /> | `/v1/getFiles?url={}&page={}`               |
| 搜索文件    | ✅  | <Badge type="tip" text="^1.0.0" /> | `/v1/searchFile?url={}&wd={}`               |
| 依Id解析   | ✅  | <Badge type="tip" text="^1.0.1" /> | `/v1/parseById?type={}&id={}`               |
| 依Url解析  | ✅  | <Badge type="tip" text="^1.0.1" /> | `/v1/parseByUrl?type={}&url={}`             |

#### 🤡 获取全部：getFilesAndDirectories

- **路径**：`/getFilesAndDirectories`
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

:::info 路径说明
获取指定链接下的所有文件夹和文件信息。
:::

:::danger 请求URL实例
https://lanzou.uyclouds.com/v1/getFilesAndDirectories?url=https://www.lanzoux.com/b1001808&page=1
:::

***

#### 📂 获取目录：getDirectory

- **路径**：`/getDirectory`
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

:::info 路径说明
获取指定链接下的所有文件夹信息。
:::
:::danger 请求URL实例
https://lanzou.uyclouds.com/v1/getDirectory?url=https://www.lanzoux.com/b1001808
:::
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

:::info 路径说明
获取指定链接下的所有文件信息。
:::
:::danger 请求URL实例
https://lanzou.uyclouds.com/v1/getFiles?url=https://www.lanzoux.com/b1001808&page=1
:::
***

#### 🔍 搜索应用：searchFile

- **路径**：`/searchFile`
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

:::info 路径说明
在指定链接下根据关键词搜索文件信息。
:::
:::danger 请求URL实例
https://lanzou.uyclouds.com/v1/searchFile?url=https://www.lanzoux.com/b1001808&wd=工具
:::
***

#### 🔗 依Url解析：parseByUrl

- **路径**：`/parseByUrl`
- **请求方法**：`GET`、`POST`
- **请求参数**：
    - `type`：需要解析的蓝奏云文件类型，必填（只能取 `new` 或 `old`）。
    - `url`：需要解析的蓝奏云文件链接，必填。
- **返回实例**：

```json
{
  "code": 200,
  "status": "解析成功",
  "url": "https://c1026.lanosso.com/sdsuhd7.apk"
}
```

:::info 路径说明
通过蓝奏云文件链接获取下载链接。这里的`type`参数是文件类型，如果链接的下载页面是新版的那么填`new`,如果是老版的那么填`old`。
:::
:::danger 请求URL实例
https://lanzou.uyclouds.com/v1/parseByUrl?type=new&url=https://www.lanzoux.com/i0gZJitwntg
:::
***

#### 🆔 依Id解析：parseById

- **路径**：`/parseById`
- **请求方法**：`GET`、`POST`
- **请求参数**：
    - `type`：需要解析的蓝奏云文件类型，必填（只能取 `new` 或 `old`）。
    - `id`：需要解析的蓝奏云文件Fid，必填。
- **返回实例**：

```json
{
  "code": 200,
  "status": "解析成功",
  "url": "https://c1026.lanosso.com/sdsuhd7.apk"
}
```

:::info 路径说明
通过蓝奏云文件Fid获取下载链接。这里的`type`参数是文件类型，如果链接的下载页面是新版的那么填`new`,如果是老版的那么填`old`。
:::
:::danger 请求URL实例
https://lanzou.uyclouds.com/v1/parseById?type=new&id=i0gZJitwntg
:::