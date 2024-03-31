1. 구현 조건
```
* 제목, 작성날짜(YYYY-MM-DD) 형태로 Form Component 작성 (TodoModal)
* 리스트 구현 - 정렬 조건은 작성날짜 기준 (TodoList)
* 상세정보를 볼 수 있는 모달 구성 (TodoModal)
* 모달을 닫고 다시 열어도 등록한 정보가 남아있어야 한다.
* 각 아이템의 상세정보 모달은 URL을 통해서도 접근할 수 있어야 한다.
* 사용자는 각 아이템을 수정할 수 있어야 한다. 
* 각 아이템을 삭제할 수 있는 기능 구현 필요. 
```

2. 프로젝트 구성
```
가) pages
  * index.tsx : TodoList, TodoModal 정의
  * [id].tsx : url을 통한 상세페이지 접근 용도

나) component
  * TodoList.tsx : TodoList 화면 component
  * TodoForm.tsx : TodoModal, [id].tsx 공통적인 화면 render component
  * TodoModal.tsx : 등록, 수정, 삭제를 위한 상세화면 Modal component
  
다) store (/src/store)
  * store.ts : storeSlice 일원화 및 store등록, 리턴타입 설정
  * todoSlice.ts : todo Create, Update, Delete 기능 관련 reducer 등록
  * selectTodo.ts : todo SelectOne, SelectList 기능 구현
  * modalSlice.ts : modal 표출용 reducer 등록 
  
라) type (/src/type)
  * todo 형식의 type 설정

마) style (/styles/)
  * global.css : 공통적인 설정으로 _app.tsx에 정의
  * reset.css : css 초기화설정
  * todo.module.css : todo 관련 css
```