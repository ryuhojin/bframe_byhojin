## 4.22일자 진행사항
> 1. 수정할 테이블 row 미선택후 modal열려고 시도할 시 alert창은 뜨지만 props문제가 생김 해결해야됨
> 2. 긴급에러 코드 삭제 에러 수정->완료
> 3. 
## 차후 진행 계획
> 1. Pagination Library로 교체
> 2. Table Component화

## 실행방법
> 1. npm install
> 2. npm run dev

## BFrame Front 개발 문서

> 본 프로젝트는 Front End Framework 중 하나 인 Vue Framework를 사용하여 만든 관리자 페이지 프로젝트 입니다. Server단 없이 FrontEnd로만 구성되어 있습니다.

---

###### 사용라이브러리

* Vuex
* Axios
* vue-cookies
* vue-i18n
* notivuecation

> ```
> 라이브러리는 위의 항목만을 사용하여 개발 되었으며  모든 기능은 순수 Javascript로 동작하고 있습니다.
> ```

---

###### 프로젝트구조

* src

  * api

    > ```
    > Backend Server와의 Axios를 사용한 Vuex의 state값을 제어하기 Action을 컨트롤하기 위한 js들이 정의되어 있습니다.
    > 
    >  common단에는 공통적으로 사용되는 메뉴 호출 및 로그인처리 등이 있습니다.
    > 
    >  admin 단에는 코드관리와 유저관리에서 사용되는 vuex의 action 호출 및 json데이터 접근을 위한  axios통신 등이 정의되어 있습니다.
    > ```

  * assets

    > ```
    > 로고와 아이콘 등의 파일을 보관하기 위한 장소로 사용하고 있습니다.
    > ```

  * components

    > ```
    > 해당 프로젝트에서 사용하게 되는 Header, Mdi, Left Nav Bar, SignForm, Modal 등 컴포넌트 단위의 파일들이 있습니다.
    > ```

  * css

    > ```
    > 해당 프로젝트에서 사용되는 css파일들이 있습니다. bootstrap의 scss파일을 부분 커스텀 하여 컴파일 한 파일이 있습니다.
    > ```

  * image

    > ```
    > 배경이미지 및 각종 이미지를 보관하기 위해 사용하고 있는 패키지입니다.
    > ```

  * router

    > ```
    > 페이징 처리를 위한 라우터 입니다.
    > ```

  * store

    > ```
    > Vuex를 위한 store입니다. 기능별로 module화 되있습니다. code, mdi, user모듈등이 있으며 공통적으로 사용되는 common모듈이 있습니다.
    > ```

  * utils

    > ```
    > 유틸에는 Cookie사용을 위한 Cookie, 숫자 변환, 원단위 표기 등을 위한 Formatter, Validation이 있습니다.
    > ```

  * views

    > ```
    > views는 직접적으로 표시 되는 화면 파일로 views의 파일 속에 컴포넌트 들이 import되어 있는 구조로 되어있습니다.
    > ```

* static

  > ```
  > json파일들이 있는 곳으로 공통 코드 관리를 위한 com_cmm_code.json과 menu구성을 위한
  > 
  > menu.json user데이터 관리를 위한 userdata.json이 보관되어 있습니다.
  > ```

---

## Vuex

#### vuex 동작구성

![](https://vuex.vuejs.org/vuex.png)

위의 사진은 본프로젝트의 Vuex동작구성과 관련된 이미지이다.

```
1. 컴포넌트는 api를 통해 store의 모듈화된 기능별 action을 호출한다.
2. 호출된 action은 mutation을 실행시킨다.
3. mutation은 state의 값을 제어하거나 변동시킨다.
4. 변화가 생긴 state값은 getter를 통해 vuecomponent에서 실시간 변동되어 보여진다
```

위의 내용은 기본적인 본 프로젝트의 동작 구성에 관하여 적은 순서 이다.

API -> Vuex(Action->Mutation->state->getter)->Vue Component 의 순서로 데이터를 제어한다.

#### notivuecation
> notivuecation은 result값으로 true 와 false값을 받는다
