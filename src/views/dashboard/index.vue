<template>
  <base-container>
    <div>dashboard</div>
    <a-badge count="5">
      <a-avatar shape="square" size="large" />
    </a-badge>
    <a-list item-layout="horizontal" :data-source="[]">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
    <a-result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    >
      <template #extra>
        <a-button key="console" type="primary">Go Console</a-button>
        <a-button key="buy">Buy Again</a-button>
      </template>
    </a-result>
  </base-container>
</template>
