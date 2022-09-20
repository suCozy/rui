# rui

리멤버 웹의 디자인 시스템

## Build

```bash
$ yarn build
# 아래 명령어로 빌드 하면,
# 빌드 후 rollup-plugin-visualizer 를 통해 생성된 html이 열림
$ yarn build:visualize
```

## Publish

- 배포시 dist 폴더 내의 내용을 root로 변환하여 배포 하고자 별도 스크립트로 배포하는 방식임

```bash
# 최신 버전 배포
$ yarn pub
# 베타 버전 배포
$ yarn pub:beta
```
