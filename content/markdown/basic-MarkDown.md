---
title: "MarkDown 기초 문법"
description: "MarkDown 파일을 작성할 수 있는 기초적인 문법 Description"
draft: false
head: true
date: 7 July 2024
type: markdown
---
# MarkDown 기초 문법

## 개요
Github에서 프로젝트를 시작하면 `README.md`라는 파일을 볼 수 있다.
이 `.md`라는 확장자는 `MarkDown`으로서 MarkUp언어에서 파생되어
MarkUp언어보다 읽거나 쓰기 쉬운 문서를 작성하기 위해 고안되었다.
(HTML로 단순 READ용 언어를 작성하려면 쓸모없는 태그가 얼마나 들어가야 할 지..!)

MarkUp 대신 MarkDown을 활용할 줄 안다면 Article을 작성할 때 더욱 쉬운 문법으로 간편하게 작성할 수 있다.
(단, 모든 MarkUp Tag를 대신할 수 없다.)

## 장단점
### 장점
1. 간결하며 편리하다.
2. 별도의 툴 없이 작성 가능하다. (TextEditor만 있으면 된다! VSC혹은 메모장에서도 작성이 가능하다.)
3. Text로 저장되어 용량이 매우 낮다.
4. 지원하는 프로그램 및 플랫폼이 다양하다.

### 단점
1. 표준이 없다. 그래서 사용하는 도구에 따라 같은 MD파일도 생성물(보여지는 방식)이 다르다.
  - 마크다운의 각 문법은 HTML로 변환되어 CSS와 함께 출력된다. 때문에 사용하는 곳의 CSS에따라 출력물이 달라지는 것이다.
  - MD를 작성할 때 눈에 보이는 스타일에 신경쓰지 말고 MD의 문법에 신경쓰며 작성하도록 한다.
2. 모든 MarkUP Tag를 대신할 수 없다.

# 문법
## Header 제목
`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` 태그로 변환되는 '제목(Header)'을 표현합니다.

/// message-box --icon=warning
책에서 목차는 여러 단계가 있지만 책 제목은 하나인 것처럼, 하나의 마크다운 파일에서는 하나의 `<h1>`(대제목)만 사용해야 합니다.
///

input :
```markdown
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6
```
output:
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

`<h1>`, `<h2>`는 다음과 같이 표현할 수도 있습니다.

```markdown
제목 1
======

제목 2
------
```

## Strong 강조
각각 `<em>` 기울임, `<strong>` 강조, `<del>` 취소선 태그로 변환됩니다.
마크다운에서 지원하지 않는 밑줄(underline)을 사용하려면 `<u></u>`태그를 직접 사용하면 됩니다.

/// message-box --icon=warning
'__*이텔릭체* 와 두껍게__ 를' 과 같이 한글에서는 강조 표현 다음에 띄어쓰기가 필요할 수 있습니다.
///

```markdown
이텔릭체는 *별 기호(Asterisks)* 혹은 _언더바 기호(Underscore)_ 를 사용하세요.
두껍게는 **별 기호(asterisks)** 혹은 __언더바 기호(underscore)__ 를 2번씩 사용하세요.
__*이텔릭체*와 두껍게__ 를 혼용할 수도 있습니다.

취소선은 ~~물결 기호(tilde)~~ 를 사용하세요.
<u>밑줄</u>은 마크다운에서 지원하지 않기에, 직접 `<u></u>` 태그를 사용하세요.
```

__출력 결과:__

이텔릭체는 *별 기호(Asterisks)* 혹은 _언더바 기호(Underscore)_ 를 사용하세요.
두껍게는 **별 기호(asterisks)** 혹은 __언더바 기호(underscore)__ 를 2번씩 사용하세요.
__*이텔릭체*와 두껍게__ 를 혼용할 수도 있습니다.

취소선은 ~~물결 기호(tilde)~~ 를 사용하세요.
<u>밑줄</u>은 마크다운에서 지원하지 않기에, 직접 `<u></u>` 태그를 사용하세요.

## List 목록
HTML의 `<ol>` orderdList, `<ul>` unOrderedList, `<li>` List 태그로 변환될 문법입니다.
`1.`로 시작하는 항목은 `<ol>`로
`-`로 시작하는 항목은 `<ul>`로 변환됩니다.
들여쓰기를 통하여 하위 항목을 작성할 수 있습니다.

/// message-box --icon=warning
하위 목록을 작성할 때, 들여쓰기(Indent)가 띄어쓰기 2칸이 아닌 3칸 이상일 수 있습니다.
또한, 순서가 있거나 없는 목록을 혼합하여 사용할 수 있지만, 동작하지 않을 수 있습니다.
///

```markdown
`-`로 시작하는 순서가 없는 목록으로 구분합니다.

```markdown
1. 순서가 있는 항목
1. 순서가 있는 항목
    1. 순서가 없는 항목
    1. 순서가 없는 항목
1. 순서가 있는 항목
1. 순서가 있는 항목

- 순서가 없는 항목
- 순서가 없는 항목
    - 순서가 없는 항목
    - 순서가 없는 항목
```

__출력 결과:__

1. 순서가 있는 항목
1. 순서가 있는 항목
    1. 순서가 없는 항목
    1. 순서가 없는 항목
1. 순서가 있는 항목
1. 순서가 있는 항목

- 순서가 없는 항목
- 순서가 없는 항목
    - 순서가 없는 항목
    - 순서가 없는 항목


## Links 링크
`<a>`로 변환되는 '링크(Links)'를 표현합니다.

/// message-box --icon=warning
'링크'는 현재 탭에서 열리는 것이 기본이지만, 새 탭에서 열릴 수도 있습니다.
///

```markdown --caption=링크 문법 구조
[이름](링크)
[이름](링크 "설명")
[이름][참조]

[참조]: 링크
[참조]: 링크 "설명"
```

```markdown
[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble Link]

[GitHub][1]
```
### BlockQuote 인용문(블록형식)
`>` 블록 인용 문자를 사용합니다.
?인용문이란? 다른 사이트 출처인 글을 인용한 단락?으로 이해하시면 됩니다.
연속으로 `> >`를 사용함으로서 들여쓰기또한 가능합니다.
```
> This is a first blockqute.
> > This is a second blockqute.
> > > This is a third blockqute.
```

> This is a first blockqute.
> > This is a second blockqute.
> > > This is a third blockqute.

## List 목록
HTML의 li, ol, ul등과 유사합니다.



###### 출처
<https://gist.github.com/ihoneymon/652be052a0727ad59601>
<https://www.heropy.dev/p/B74sNE>