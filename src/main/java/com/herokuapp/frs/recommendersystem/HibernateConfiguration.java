package com.herokuapp.frs.recommendersystem;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EnableTransactionManagement
@PropertySource({"classpath:application.properties"})
public class HibernateConfiguration{

  @Autowired
  private Environment env;

  @Bean
  public LocalSessionFactoryBean sessionFactory(){
      LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
      sessionFactory.setDataSource(getDataSource()); 
      sessionFactory.setPackagesToScan("com.herokuapp.frs.entity");;
      sessionFactory.setHibernateProperties(getHibernateProperties());

      return sessionFactory;
  }

  private Properties getHibernateProperties() {
    Properties props = new Properties();
    props.setProperty("spring.jpa.properties.hibernate.dialect", env.getProperty("spring.jpa.properties.hibernate.dialect"));
    return props;
  }

  @Bean
  public DataSource getDataSource(){
    BasicDataSource dataSource= new BasicDataSource();
    dataSource.setUrl(env.getProperty("spring.datasource.url"));
    dataSource.setUsername(env.getProperty("spring.datasource.username"));
    dataSource.setPassword(env.getProperty("spring.datasource.password"));
    return dataSource;
  }

  @Bean
  @Autowired
  public HibernateTransactionManager transactionManager(SessionFactory sessionFactory){
    HibernateTransactionManager transactionManager = new HibernateTransactionManager();
    transactionManager.setSessionFactory(sessionFactory);
    return transactionManager;
  }
}